import React, { Component } from 'react'
import {Container,List,Message,Item,Header,Image,Segment,Grid,Button,Divider,Form,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import fanuel from './../../../components/Images/fanuel.jpg'
import ganesh from './../../../components/Images/ganesh.png'
import vanessa from './../../../components/Images/vanessa.jpeg'
import husam from './../../../components/Images/husam.jpeg'
import { Helmet } from 'react-helmet';


export default class Result extends Component {
    render() {
         return (
          
          <div>

<Helmet>
   <style>{'body { background-color: #532f8c'}</style>

 
         </Helmet>

             <div style={{margin:'80px 20px 0px 20px'}}>


 


 
          
 
   <Container fluid >

  <div className='wrapper' style={{minHeight:'80vh'}}>

 
  
 
{/* {this.props.result.name || 



<div style={{margin:'120px 0 0 0'}}>

 <Container>

 <Message  >
    <Message.Header>Cannot Find this stock</Message.Header>
      <p>Please try again another time...</p>
  </Message> 
  </Container>

   
  
  </div>
  
} */}
   

 {this.props.result.name? 
 
 
 <div >

 
  
 

<div style={{ margin:'65px 0px 0px 0px',
border:'1px solid white',
padding:'22px',
borderRadius:'3px',
// borderRadius:'8px',
backgroundColor:'#222222',
color:'white',
// color:'white'
}}>

<Item.Group  >

<Item>
<Item.Image style={{width:'60px',height:'60px',border:'1px solid #eaecef'}} src={this.props.result.logo} />
<Item.Content verticalAlign='middle'><h2 style={{fontWeight:'500',fontSize:'35px'}}>{this.props.result.name}</h2></Item.Content>
</Item>
</Item.Group>

<Divider />
<p className='details'>Exchange - {this.props.result.exchange}</p>

<Divider />
<p className='details' >Shares Outstanding - {this.props.result.shareOutstanding}</p>


<Divider />
<p className='details'> website - <a href={this.props.result.weburl} target='_blank'> {this.props.result.weburl} </a></p>

<Divider />
<p className='details' > industry -  {this.props.result.finnhubIndustry}</p>


<Divider />
<p className='details'> ticker -{this.props.result.ticker}</p>

<Divider />
<p className='details'>country -{this.props.result.country}</p>


<Divider />


<p className='details'>phone - {this.props.result.phone}</p>

<Divider />
<p className='details'>currency -{this.props.result.currency}</p>

<Divider />
<p className='details'>ipo - {this.props.result.ipo}</p>

 



 

</div> 

  
 
 


</div> : 

<Message negative >
<Message.Header  >This stock is currently unavailable</Message.Header>
  <p>please come back and check again...</p>
</Message> 
}
             

 

        <div style={{ padding: '6em 0em' }}>

{/* <Container >

     <Grid divided='vertically'>
<Grid.Row columns={2}>
<Grid.Column>
<h1 className='how-it-works'style={{fontSize:'2.5rem',color:'white'}}>How This simple app works</h1>     
<p className='how-it-works'style={{fontSize:'1.25rem',color:'white',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>Fully secure website with authentication and free to join. simply create your own personalized list of stocks that you may have in mind. If not, this app will provide everything you need to keep you competitvely informed, no matter your experience level.</p>
</Grid.Column>
<Grid.Column>
<h1 className='mission'className='motiv'style={{fontSize:'2.5rem',color:'white'}}>Mission </h1>     
<p style={{fontSize:'1.25rem',color:'white',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>
Our motivation when building this application was to empower investors with valuable information about the stock market, and to also create an engaging experience for people with any background. Our group focused on an intuitive design, vibrant colors, and convenience for users.</p>      </Grid.Column>
</Grid.Row>
</Grid>

 </Container> */}

 
</div>

 
</div>

        
 

 
            </Container >
           

            </div>


<div className='div-tag'style={{backgroundColor:'#222222'}}>
<Container>
<Segment vertical>

 <Grid columns={3} divided>
<Grid.Row>
  <Grid.Column>
      <h1 style={{color:'white'}}className='how-it-works'>10/10 Stock Tracker</h1>
      <div><p style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>
      This application is a helpful tool to save stocks onto a personal watchlist. It provides information on the stock markets top 10 winners and losers of the day. Users can also search and track any stock in the market and view stocks that are trending among other users.

</p></div>
  </Grid.Column>
  <Grid.Column>
<h1 style={{color:'white'}}className='how-it-works'>      Get Started
</h1>
<p  style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}> Get access to your Watchlist by creating an account.
</p>
<Link
as={Link} to='/signup'>
<Button color='purple'> Register Now</Button>

</Link>
    </Grid.Column>
  <Grid.Column>
  <h1 style={{color:'white'}}className='how-it-works'> Contact Us</h1> 
  <p  style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',marginBottom:'10px'}}> <span  >  <a href='mailto:fanuelnalem@outlook.com'  style={{color:'white'}}   >  <Icon name='mail'></Icon>Send Feedback</a> </span></p>  

  
   <h1 className='how-it-works'style={{color:'white',marginTop:'0',marginBottom:'18px'}}>
   Developed By
   </h1>  
   <div> 
       <Grid>

        <Grid.Row columns={4}>
  <Grid.Column>
    <Image className='img' src={vanessa} />
  </Grid.Column>
  <Grid.Column>
    <Image className='img'src={husam} />
  </Grid.Column>
  <Grid.Column>
    <Image className='img'src={fanuel} />
  </Grid.Column>
  <Grid.Column>
    <Image className='img'src={ganesh} />
  </Grid.Column>
</Grid.Row>
</Grid>

</div>
       

  </Grid.Column>
</Grid.Row>
</Grid>
 
</Segment>
 <p style={{backgroundColor:'rgb(55, 55, 59)',padding:'10px',borderRadius:'5px',color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif' }}className='p-tag' >Copyright 2020. All rights reserved.</p>

  </Container>
  </div> 
  </div>


 
        )
    }
}
