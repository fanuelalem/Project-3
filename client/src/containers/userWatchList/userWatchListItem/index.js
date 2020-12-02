import React from 'react';
import DeleteTodoModal from '../../../components/DeleteModal';
import { Table,Segment } from 'semantic-ui-react'
import moment from 'moment'
 

export default (props) => {
  
  return(
 <div>
     <Table   selectable inverted  >
    <Table.Header>
      <Table.Row>
         <Table.HeaderCell style={{color:'white'}}>Stock Name</Table.HeaderCell>
        <Table.HeaderCell style={{color:'white'}}>Date</Table.HeaderCell>
        <Table.HeaderCell> </Table.HeaderCell>
        

       
      </Table.Row>
    </Table.Header>
    <Table.Body>
     
{props.todos.map(({_id,completed,text,dateCreated})=>(


 
    <Table.Row key={_id}>
       <Table.Cell > <h5 style={{color:'white'}}>{text}</h5></Table.Cell>
       <Table.Cell style={{color:'white'}}>{moment(dateCreated).fromNow()} </Table.Cell>
       <Table.Cell>        <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/>
</Table.Cell>
 
       </Table.Row>
       
   
 ))}
    
    </Table.Body>
   </Table>

 

 </div>

  )
};


// import React from 'react';
// import { Header, List, Button } from 'semantic-ui-react';

// import DeleteTodoModal from '../../../components/DeleteModal';

// export default (props) => {
//   if (props.todos.length === 0) {
//     return <Header content='add your stocks here!'/>
//   } 
//   else {
//     return props.todos.map(({_id, completed, text}) => {
//       return (
//         <List.Item key={_id}>
//           <List.Content floated='left'>
//           {/* <p style={{fontSize:'20px'}}>{text}</p> */}
//             <p style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px'}} >{text}</p>
//           </List.Content>
//           <List.Content floated='right'>
    
            // <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/>
//           </List.Content>
//         </List.Item>
//       );
//     });
//   }
// };
