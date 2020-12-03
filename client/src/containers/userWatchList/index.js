import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Grid,Divider,Header, Form, Segment, Message, List, Pagination, Button, Icon } from 'semantic-ui-react';
import FormContainer from './../searchForm/formContainer/index'
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { getUserData, getOtherUsers } from './../../actions/profile';


  
import axios from 'axios';

import UserTodoListItems from './userWatchListItem';

// import requireAuth from '../../hoc/requireAuth';


import { getUserTodos, updateTodoCompletedById, deleteTodoById } from '../../actions/stocks';

import { ADD_TODO_ERROR, ADD_TODO} from '../../actions/types';

class UserTodoList extends Component {

state={
  activePage:1,
  start:0,
  end:10
}


// onSubmit = async (formValues,dispatch) => {
    
//   const {text} = formValues
  
//         try {
//         await axios.post('/api/user/stock', {text:'ko'}, { headers: { 'authorization': localStorage.getItem('token')}} );
//         dispatch({ type: ADD_TODO });
//         this.props.getUserTodos();
//       } catch (e) {
//         dispatch({ type: ADD_TODO_ERROR, payload: e });
//       }
//     }
  
 

  onSubmit = async (formValues,dispatch) => {
    


      try {
      await axios.post('/api/user/stock', formValues, { headers: { 'authorization': localStorage.getItem('token')}} );
      dispatch({ type: ADD_TODO });
      this.props.getUserTodos();
    } catch (e) {
      dispatch({ type: ADD_TODO_ERROR, payload: e });
    }
  }


addWinnerStock = () => {
  alert('hello')
}
 

  componentDidMount() {
     this.props.getUserTodos();
   }

  renderAddTodo = ({ input, meta }) => {
     return (
      <>

        <Form.Input
          {...input}
          error={ meta.touched && meta.error }
          fluid
          autoComplete='off'
          placeholder='Add your stock'
          icon='dollar'
          iconPosition='left'

        />
      </>
    )
  }


  handlePageChange = (event, data) => {
    console.log(data)
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10
    });
  }


  render(props) {
    console.log(this.props,'dcsdcsds')
      const {handleSubmit} = this.props;
      // console.log(this.props.result,'rerfv')

      return(
           <>
<Helmet>
   <style>{'body { background-color: rgba(83,47,140,.6) ; }'}</style>

         </Helmet>
              <div style={{margin:'70px 0px 25px 0px'}}>

 
<Segment 
// style={{backgroundColor:'#222324'}}
>
  <div 
  // style={{backgroundColor:'#222324'}}
  >

     <Grid columns={2} relaxed='very'>
      <Grid.Column >

     
      <FormContainer 
       graphx={this.props.x}
      graphy={this.props.y}
      qoute={this.props.qoute}
      info={this.props.result}
      // graphx = {this.props.xvalues} 
      // graphy = {this.props.yvalues} 
      // data= {this.props.result} 
      />   
 
      </Grid.Column>
      <Grid.Column> 
          

<div style={{padding:'0 25px 34px 0'}}>

 
       <Header as="h2"  textAlign="center" >
         <p style={{color:'black'}}>My WatchList </p> 
       </Header>
          <Form size='large' onSubmit={handleSubmit(this.onSubmit)}   >
              <Segment   >
                <Field
                name="text"
                component={this.renderAddTodo}
                />
                <Button
                type='submit'
                fluid
                color='purple'
                content='add'
                />
              </Segment>
              </Form>
              <List animated divided selection >
                <UserTodoListItems 
                todos={this.props.todos.slice(this.state.start,this.state.end)}
                handleUpdate={this.props.updateTodoCompletedById}
                handleDelete={this.props.deleteTodoById}
                />
              </List>
              {/* {
                this.props.todos.length <= 9 ? 
                null
                : <Pagination
                pointing
                secondary
                totalPages={Math.ceil(this.props.todos.length / 10)}
                onPageChange={(event,data)=> this.handlePageChange(event,data)}
                activePage={this.state.activePage}
                />
              }        */}
</div>

              </Grid.Column>
    </Grid>

    </div>

  </Segment>
  </div>

          </>
      );
  }

}

function mapStateToProps({ todos: { userTodos, getUserTodosServerError, getUserTodosClientError, deleteTodoByIdError}}) {
  return {
    todos: userTodos,
    clientError: getUserTodosClientError,
    serverError: getUserTodosServerError,
    deleteTodoByIdError,
  };
}
 export default compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserTodos,updateTodoCompletedById, deleteTodoById,getUserData, getOtherUsers })
)(UserTodoList);




 