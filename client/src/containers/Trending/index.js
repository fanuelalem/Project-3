import React, { Component } from 'react'
import axios from 'axios'
import { List, Header,Table, Message,Button,Image,Pagination,Container,Grid,Responsive,Card,Icon } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';


 
export default class Trending extends Component {


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
  render() {
    return (
      <div style={{margin:'80px 20px 0px 20px'}}>

<Helmet>
   <style>{'body { background-color: #532f8c'}</style>

 
         </Helmet>

<Grid  >
    <Grid.Row>
      <Grid.Column >
 
 

       </Grid.Column>
      <Grid.Column width={14} className='customScroll'>

       {console.log(this.state.filteredUsers,'filtered users')}
 
      {  this.state.filteredUsers.map((item)=>(


         <div style={{margin:'0 0 20px 0'}}>

 
 


  

     <div>

   
    <Card fluid style={{border:"none"}}  >

    <Card.Content >
      <Image
         floated='left'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header >
        <h1 style={{textAlign:'left'}}> {item.email}</h1> 
       </Card.Header>
    {/* <Card.Meta>{item.email} has {item.myStocks.length} stocks...</Card.Meta> */}
      
    </Card.Content>
    <Card.Content extra>

    
   
  {item.myStocks.length? 
<div>
<Table   selectable    >
  <Table.Header>
    <Table.Row>
       <Table.HeaderCell style={{color:'black'}}>Recent stocks</Table.HeaderCell>
 
      <Table.HeaderCell  style={{color:'black'}}>Date</Table.HeaderCell>
 

     
    </Table.Row>
  </Table.Header>
  <Table.Body>
 
    <Table.Row  >

 
      <Table.Cell > 
        {/* {console.log(item.myStocks[0].text,'item')} */}

       
        <p style={{color:'black'}}>{item.myStocks[0].text}</p>
        
        </Table.Cell>
      

     <Table.Cell> 
       <p style={{color:'black'}}>{item.myStocks[0].dateCreated } </p>  
       </Table.Cell>
 

     </Table.Row>
     <Table.Row  >

       <Table.Cell>
{console.log(item,'item show me')}

<p style={{color:'black'}}>{item.myStocks[1]? item.myStocks[1].text:'none'}</p>


       </Table.Cell>
     
     <Table.Cell> 
     <p style={{color:'black'}}>{item.myStocks[1]? item.myStocks[1].dateCreated:'none'}</p>

       {/* <p>{item.myStocks.length? item.myStocks[1].dateCreated : 'none'} </p>  */}
       
        </Table.Cell>
    

     </Table.Row>

     </Table.Body>
 </Table>   

     </div>


     :
<div>  

<Table   selectable    >
  <Table.Header>
    <Table.Row>
       <Table.HeaderCell style={{color:'black'}}>Recent stocks</Table.HeaderCell>
       <Table.HeaderCell style={{color:'black'}}></Table.HeaderCell>

      <Table.HeaderCell style={{color:'black'}}>Date</Table.HeaderCell>
       

     
    </Table.Row>
  </Table.Header>
  <Table.Body>
 
    <Table.Row  >

 
      <Table.Cell > <p style={{color:'black'}}>user has no stocks yet..</p></Table.Cell>
     <Table.Cell> <p>    </p>  </Table.Cell>
    

     </Table.Row>

     
     </Table.Body>
 </Table>   

 

</div>      }
     
     
 

  
     
     </Card.Content>


     </Card>      

     



 

  </div>
    


 

        
         </div>
      ))}
       
    
    </Grid.Column>
    </Grid.Row>
    </Grid>       </div>
    )
  }
}
