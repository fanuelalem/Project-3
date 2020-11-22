import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Table,Grid,Divider,Header, Form, Segment, Message, List, Pagination, Button, Icon } from 'semantic-ui-react';
import { compose } from 'redux';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { getUserTodos, updateTodoCompletedById, deleteTodoById } from '../../actions/stocks';
import { Link } from "react-router-dom"
import { ADD_TODO_ERROR, ADD_TODO} from '../../actions/types';

class WinnerListItems extends Component {
    state={
    title:'',
   }


   onSubmit = async (formValues, dispatch) => {
     const {title} = formValues
    try {
     await axios.post('/api/user/stock', {text:this.state.title}, { headers: { 'authorization': localStorage.getItem('token')}} );
     dispatch({ type: ADD_TODO });
     this.props.getUserTodos();
   } catch (e) {
     dispatch({ type: ADD_TODO_ERROR, payload: e });
   }
 }

 componentDidMount() {
  this.props.getUserTodos();
}




  render() {

    const {handleSubmit} = this.props;


    console.log(this.state,'l')
    return (
      <div>
        


        <div>


<Helmet>
   <style>{'body { background-color: #532f8c; }'}</style>

         </Helmet>
     <div style={{margin:'100px 40px 0px 40px'}}>

    <Table widths={4}>
     <Table.Header>
       <Table.Row>

       <Table.HeaderCell><h2 style={{fontWeight:'500'}}>Company [ticker]</h2></Table.HeaderCell>

       <Table.HeaderCell>Last price</Table.HeaderCell>
       <Table.HeaderCell>price change</Table.HeaderCell>

         <Table.HeaderCell>percent change</Table.HeaderCell>

       </Table.Row>
     </Table.Header>
     <Table.Body>
      

 {this.props.gainers.map(({performanceId,standardName,ticker,percentChange,lastPrice,priceChange,exchange})=>(
    





 <Table.Row key={performanceId}>
        <Table.Cell > 
          <Form 
           onSubmit={handleSubmit(this.onSubmit)}
          // onSubmit={()=>{alert('hello')}}
          >
             
            <Button 
            
            style={{margin:'0 10px 0 0'}}
     // onClick={this.executeFunctions}
            onClick={()=>{this.setState({title:standardName},()=>{console.log(standardName)})}}  
          color='green'> 
          <Icon name='plus'></Icon>save to watchlist  
          </Button>
        

          <span 
          style={{fontWeight:'500',fontSize:'20px'}}> 

          {standardName} [{ticker}]
          
          </span>
          </Form>

         </Table.Cell>

        <Table.Cell>${lastPrice} </Table.Cell>
        <Table.Cell >${priceChange} </Table.Cell>

        <Table.Cell positive>+{percentChange}% </Table.Cell>


        {/* <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/> */}
 
        </Table.Row>

      

  ))}
      </Table.Body>
    </Table>
 
  
</div>
      </div>


        
      </div>
    )
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
  connect(mapStateToProps, { getUserTodos,updateTodoCompletedById, deleteTodoById })
)(WinnerListItems);



















// import React, { Component } from 'react'
//  import { Link } from "react-router-dom"
// import { Helmet } from 'react-helmet';
//  import axios from 'axios'
 
// // import "./../../../../App.css"
// import { Table,Icon ,Button} from 'semantic-ui-react'
// export default class WinnerListItems extends Component {
 

//   state={
//     title:'',
//    }

// doSomething = () => {
//   alert('ed')
// }

// doSomethingElse = () => {
//   console.log('hello')
// }

// executeFunctions = () => {
//   this.doSomething()
//   this.doSomethingElse()
// }
 

//   render() {
// console.log(this.state,'l')
//     return (
  



//         <div>


// <Helmet>
//    <style>{'body { background-color: #532f8c; }'}</style>

//          </Helmet>
//      <div style={{margin:'100px 40px 0px 40px'}}>

//     <Table widths={4}>
//      <Table.Header>
//        <Table.Row>

//        <Table.HeaderCell><h2>Company [ticker]</h2></Table.HeaderCell>

//        <Table.HeaderCell>Last price</Table.HeaderCell>
//        <Table.HeaderCell>price change</Table.HeaderCell>

//          <Table.HeaderCell>percent change</Table.HeaderCell>

//        </Table.Row>
//      </Table.Header>
//      <Table.Body>
      

//  {this.props.gainers.map(({performanceId,standardName,ticker,percentChange,lastPrice,priceChange,exchange})=>(
    





//  <Table.Row key={performanceId}>
//         <Table.Cell > 
//           <Button 
          
//     onClick={this.executeFunctions}
//             // onClick={()=>{this.setState({title:standardName},()=>{console.log(standardName)})}}  
//           color='green'> 
//           <Icon style={{margin:'0 0 0 0'}}
//           name='plus'></Icon>
//           </Button><span 
//           style={{fontWeight:'600'}}> 

//           {standardName} [{ticker}]
          
//           </span></Table.Cell>

//         <Table.Cell>${lastPrice} </Table.Cell>
//         <Table.Cell >${priceChange} </Table.Cell>

//         <Table.Cell positive>+{percentChange}% </Table.Cell>


//         {/* <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/> */}
 
//         </Table.Row>

      

//   ))}
//       </Table.Body>
//     </Table>
 
  
// </div>
//       </div>


//     )
//   }
// }



























// import React from "react" 
// import { Link } from "react-router-dom"
// import { Helmet } from 'react-helmet';

// // import "../App.css"
// import { Table,Icon ,Button} from 'semantic-ui-react'


// const WinnerListItems = props => (
// <div>
// <Helmet>
//    <style>{'body { background-color: #532f8c; }'}</style>

//          </Helmet>
//      <div style={{margin:'100px 40px 0px 40px'}}>

//     <Table widths={4}>
//      <Table.Header>
//        <Table.Row>

//        <Table.HeaderCell><h2>Company [ticker]</h2></Table.HeaderCell>

//        <Table.HeaderCell>Last price</Table.HeaderCell>
//        <Table.HeaderCell>price change</Table.HeaderCell>

//          <Table.HeaderCell>percent change</Table.HeaderCell>

//        </Table.Row>
//      </Table.Header>
//      <Table.Body>
      

//  {props.gainers.map(({performanceId,standardName,ticker,percentChange,lastPrice,priceChange,exchange})=>(
//     <Table.Row key={performanceId}>
//         <Table.Cell > <Button  color='green'> <Icon style={{margin:'0 0 0 0'}}name='plus'></Icon></Button><span style={{fontWeight:'600'}}> {standardName} [{ticker}]</span></Table.Cell>

//         <Table.Cell>${lastPrice} </Table.Cell>
//         <Table.Cell >${priceChange} </Table.Cell>

//         <Table.Cell positive>+{percentChange}% </Table.Cell>


//         {/* <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/> */}
 
//         </Table.Row>
//   ))}
     
//      </Table.Body>
//     </Table>
 
  
//     </div>

//   </div>
// );

// export default WinnerListItems;


// ticker,changes,price,
// changesPercentage,companyName