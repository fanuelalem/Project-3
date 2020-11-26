import React, { Component } from 'react';
import { List, Header, Message } from 'semantic-ui-react';
// Message third paramater
import { connect } from 'react-redux';
import { getAllTodos,getUserTodos } from '../../actions/stocks';
// import {renderList} from './../rendernewList'
// import moment from 'moment';
import DeleteTodoModal from './../../components/DeleteModal';
import { Table } from 'semantic-ui-react'
import FormContainer from './../searchForm/formContainer/index'
import moment from 'moment'
import { Helmet } from 'react-helmet';


class AllTodosList extends Component {
  componentDidMount() {
    console.log("Inside of componentDidMount");
    this.props.getAllTodos();
    this.props.getUserTodos();
  }

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

  renderList = () => {
  console.log(this.props,'ed')
    return(
<div>

       <Helmet>
   <style>{'body { background-Image: linear-gradient(#928dab,#948e99); }'}</style>

         </Helmet>
      <div style={{margin:'100px 40px 0px 40px'}}>

  
     <Table singleLine>
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
     </Table>
  
   
  
   </div>
   </div>

    )
  };
   

  render() {
     return (
      <List celled selection size='huge'>
        {this.props.getAllTodosError ? <Message negative header={this.props.getAllTodosError}/> : null}
      { this.renderList() }

       </List>
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