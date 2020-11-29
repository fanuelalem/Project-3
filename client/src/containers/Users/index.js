import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Grid,Button, Container, Responsive, Card,Image,Icon } from 'semantic-ui-react';
 
import { getUserData, getOtherUsers } from '../../actions/profile';
import requireAuth from './../../hoc/requireAuth';
 import UsersCard from './UsersCard';
 import axios from 'axios'

 
 

 
// import AllProfileHeader from '../../components/AllProfileHeader';
// import UserProfile from './../../components/UserProfile';
// import UsersCard from './UsersCard';

// import './scrollableContainer.css';

class Users extends Component {

    

  componentDidMount() {
      this.props.getUserData();
    this.props.getOtherUsers();
    }

  render() {
    console.log(this.props.currentUser.myStocks)
      return (
      <Container>
        <Grid columns={2}>

    <h2 style={{margin:'100px 0 0 0'}}> 
     </h2>
         </Grid>
        <Grid.Row>
 
          <Grid columns={2} Container stackable centered>
            <Grid.Column width={4}>
              <Responsive minWidth={768}>
              <h2>current user </h2>

                   
                </Responsive>
 
            </Grid.Column>
 
            <Grid.Column width={12} className='customScroll'>
 
              <Card.Group fluid stackable doubling itemsPerRow={1} >
  
                 <UsersCard users={this.props.filteredUsers} />
 
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </Container>
    )
  }
};


function mapStateToProps(state) {
 
  return {
     currentUser: state.currentUser.getUserData,
    filteredUsers: state.filteredUsers.getOtherUsers,
    getUsersError: state.users.getUsersError
  };
 
}

export default compose(
  connect(mapStateToProps, { getUserData, getOtherUsers }),
  requireAuth
)(Users);