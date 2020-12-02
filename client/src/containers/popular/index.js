import React, { Component } from 'react';
import { List, Header, Message,Button,Image,Pagination,Container,Grid,Responsive,Card,Icon } from 'semantic-ui-react';
// Message third paramater
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllTodos,getUserTodos } from '../../actions/stocks';
// import {renderList} from './../rendernewList'
// import moment from 'moment';
import DeleteTodoModal from './../../components/DeleteModal';
import { Table } from 'semantic-ui-react'
// import { getUserData, getOtherUsers } from '../../actions/profile';
import axios from 'axios'
import FormContainer from './../searchForm/formContainer/index'
import moment from 'moment'
import { Helmet } from 'react-helmet';


class AllTodosList extends Component {
  state={
    activePage:1,
    start:0,
    end:10,
    userData:'',
    filteredUsers:[]

  }
  

  componentDidMount() {

 
     this.getOtherUsers()
     this.getUserData()
     this.props.getAllTodos();
    this.props.getUserTodos();
  }


   getUserData = () => {
    axios.get('/api/user/profile', {
      headers: { authorization: localStorage.getItem('token') },
    }).then((response)=>{
      // console.log(response.data.myStocks[0].text,'user response')
      this.setState({userData:response.data},()=>{
        console.log(response.data,'sdcs')
      })

 
    })

 
 }
 
   getOtherUsers = () => {
   axios.get('/api/user/profiles', {
    headers: { authorization: localStorage.getItem('token') },
  }).then((response)=>{
    this.setState({filteredUsers:response.data},()=>{
      console.log(response.data)
    })
   })
 };

  

  handlePageChange = (event, data) => {
    console.log(data)
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10
    });
  }

 
  renderList = () => {
     
  // console.log(this.props.allTodos.length,'ed')
    return(
<div>

      
      <div style={{margin:'70px 25px 25px 25px'}}>

  
  
  

  <Grid  >
    <Grid.Row>
      <Grid.Column >
 
 

       </Grid.Column>
      <Grid.Column width={14} className='customScroll'>

       {console.log(this.state.filteredUsers,'filtered users')}
 
      {  this.state.filteredUsers.map((item)=>(


         <div style={{margin:'0 0 20px 0'}}>

 
 


  

     <div>

   
    <Card fluid style={{border:"none"}} >

    <Card.Content>
      <Image
         floated='left'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header>
        <h1 style={{textAlign:'center'}}> {item.email}</h1> 
       </Card.Header>
    {/* <Card.Meta>{item.email} has {item.myStocks.length} stocks...</Card.Meta> */}
      
    </Card.Content>
    <Card.Content extra>

    <Table   selectable    >
  <Table.Header>
    <Table.Row>
       <Table.HeaderCell style={{color:'black'}}>Recent</Table.HeaderCell>
      <Table.HeaderCell style={{color:'black'}}>Date</Table.HeaderCell>
       

     
    </Table.Row>
  </Table.Header>
  <Table.Body>
   


    <Table.Row  >
      <Table.Cell > <p style={{color:'black'}}> { }</p></Table.Cell>
     <Table.Cell> <p>datecreated </p>  </Table.Cell>
    

     </Table.Row>
     
     
 

  
  </Table.Body>
 </Table>     
     </Card.Content>


     </Card>      

     



 

  </div>
    


 

        
         </div>
      ))}
       
    
    </Grid.Column>
    </Grid.Row>
    </Grid>
   
  
   </div>
   </div>

    )
  };
   

  render() {
      return (

      <div>
 
       <List celled selection size='huge'>
        {this.props.getAllTodosError ? <Message negative header={this.props.getAllTodosError}/> : null}
      { this.renderList() }

       </List>

       {this.props.allTodos.length <= 9 ? 
null     
       
:
<Pagination
                pointing
                secondary
                totalPages={Math.ceil(this.props.allTodos.length / 10)}
                onPageChange={(event,data)=> this.handlePageChange(event,data)}
                activePage={this.state.activePage}
                />
              
              }
       </div>

    );
  }
}

function mapStateToProps(state) {
  return { allTodos: state.todos.allTodos, getAllTodosError: state.todos.getAllTodosError };
}

export default connect(mapStateToProps, { getAllTodos,getUserTodos })(AllTodosList);

// export default AllTodosList;


// { this.props.getAllTodosError ? <Message negative header={this.props.getAllTodosError}/> : null }
// { this.renderList() }


// folder name = AllTodosList



  // renderList = () => {
  //   console.log(this.props)
  //   if (this.props.allTodos.length === 0) {
  //     return <Header content='No stocks yet'/>;
  //   } else {
  //     return this.props.allTodos.map(({ _id, text, dateCreated}) => {
  //       return (
  //         <List.Item key={_id}>
  //           <List.Content>
  //             <List.Header>{text}</List.Header>
  //             <List.Description>{moment(dateCreated).fromNow()}</List.Description>
  //           </List.Content>
  //         </List.Item>
  //       );
  //     });
  //   }
  // }




 

  {/* <Responsive>

       <Card>
    <Card.Content header='About Amy' >
    <Card.Header> {this.state.userData.email}</Card.Header>
    </Card.Content>
    <Card.Content  ><p> hello world</p></Card.Content>
    <Card.Content extra>

<Button as={Link} to='/watchlist'color='green'>
  Go to my watchlist
  </Button>    
  
  </Card.Content>
  </Card>
  </Responsive> */}


      {/* <Table singleLine inverted selectable>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell>Stock Name</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
         
        </Table.Row>
      </Table.Header>
      <Table.Body>
   {this.props.allTodos.map(({_id,text,dateCreated,name})=>(
     <Table.Row key={_id}>
         <Table.Cell> <h3>{text}</h3></Table.Cell>
         <Table.Cell>{moment(dateCreated).fromNow()}</Table.Cell>
   
        </Table.Row>
   ))}
      
      </Table.Body>
     </Table> */}