import React, { Component } from 'react'
import {Container,Header,Image,Segment,Grid,Button,Divider,Form,Icon } from 'semantic-ui-react'
import './../../index.css'
import logo from './../../components/Images/Logo.png'
 import axios from 'axios';
import { Link } from 'react-router-dom';
import fanuel from './../../components/Images/fanuel.jpg'
import ganesh from './../../components/Images/ganesh.png'
import vanessa from './../../components/Images/vanessa.jpeg'
import husam from './../../components/Images/husam.jpeg'
import pic1 from './../../components/Images/topgainers.png'
import pic2 from './../../components/Images/watchlist.png'



export default class Home extends Component {

 render() {
   
  return (
  
  <div>
    <div className="background"style={{minHeight:'606px'}}>
      <div className="info">
        
        <Container >
          <div className='j'>
            <Image style={{backgroundColor:'white'}} className='im'src={logo}/>
            </div>
            
            <h1 className='node'> Getting Started on your 10/10 stock tracker account </h1>
            <p className='description'>Add stocks to your watchList with the 10/10 stock tracking app and 
            become a smarter investor with our amazing tools.</p>
            <Link
            as ={Link}
            to="/signup"
            >
              <button className='buttn' style={{color:'#333',padding:'10px 16px'}}> 
              <Icon name='lightning'></Icon>Get Started on your own account
              </button>
              </Link>
              <Link
              as ={Link}
              to="/search-stock">
                <Link
                as={Link}
                to='/searchstock'
                >
                  <Button 
                  onClick={this.props.onhomeclick} 
                  color='purple'> <Icon name='search'></Icon><span className='buttn2'> Search Stocks</span>  </Button>
                  </Link>
                </Link>
        </Container>
 

    </div>

       </div>
       
       <Segment style={{ padding: '8em 0em' }} vertical>
         <Container>

          <Grid>
         <Grid.Row >
         <Grid.Column width={5}>

           <div className='div-info'>

          <Header textAlign='center'  as='h3' style={{ fontSize: '2em' }}>
          
         View the top 10 stock Market daily winners and losers, and lookup any stock.
        </Header>
        <p style={{ fontSize: '1.33em',textAlign:'center' }}>
             Open the winners or losers tab to check the daily stock market winners and losers. In the search bar, you can search stocks by their ticker to find extra information and details about the company.
           
        </p>
        </div>

  </Grid.Column>
  <Grid.Column   floated='right' width={10}>
<Image  style={{borderRadius:'4px',height:'350px'}} src={pic1}/>

  </Grid.Column>

         </Grid.Row>
           
         </Grid>

         
        
<br></br>
<br></br>
<br></br>

        <Divider/>

        <br></br>
<br></br>
<br></br>

        <Grid>
         <Grid.Row >
         <Grid.Column width={10}>
  <Image style={{borderRadius:'4px'}}src={pic2}  />
  </Grid.Column>
         <Grid.Column floated='right'width={5}>

         <div className='div-info2' >

 
         <Header as='h3' textAlign='center'  style={{ fontSize: '2em' }}>
          
         Create your personal stocks watchlist and join the 10/10 stock community to view trends.
        </Header>
        <p style={{ fontSize: '1.33em',textAlign:'center' }} >
        You can also enter stocks onto the watchlist to manage and keep track of your favorite stocks. The community tab will allow you to view popular stocks among other users.

        </p>

         
        </div>
  

  </Grid.Column>
 
  </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
                 
          <Link
         
 as ={Link}
 
 to="/signup">
 <Button  style={{margin:'30px 0 0 0'}} color='purple'> <Icon name='signup'></Icon><span className='buttn2'> Register</span>  </Button>
 </Link>   



 </Grid.Column>
        </Grid.Row>

          
           
         </Grid>


         
         </Container>

     </Segment>

        <div className='l'>
 
 

    <div style={{ padding: '6em 0em' }}>

<Container >

     <Grid divided='vertically'>
<Grid.Row columns={2}>
<Grid.Column>

<Header as='h3' style={{ fontSize: '2em' }}>
          
How This simple app works        
 </Header>


 <p className='how-it-works'style={{fontSize:'1.33em',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>Fully secure website with authentication and free to join. simply create your own personalized list of stocks that you can have in mind. If not, this app will provide everything you need to keep you competitvely informed, no matter your experience level.</p>
</Grid.Column>
<Grid.Column>

<Header as='h3' style={{ fontSize: '2em' }}>
          
Mission           </Header>


 <p style={{fontSize:'1.33em',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>
Our motivation when building this application was to empower investors with valuable information about the stock market, and to also create an engaging experience for people with any background. Our group focused on an intuitive design, vibrant colors, and convenience for users.</p>      </Grid.Column>
</Grid.Row>
</Grid>

 </Container>

 
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
           {/* <Grid>

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
    </Grid> */}
    <div >
    <Image size='tiny' centered className='img'src={fanuel} />

    </div>
  
    </div>
           

      </Grid.Column>
    </Grid.Row>
    </Grid>
     
    </Segment>
     <p style={{backgroundColor:'rgb(55, 55, 59)',padding:'10px',borderRadius:'5px',color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif' }}className='p-tag' >Copyright 2020. All rights reserved.</p>

      </Container>

</div> 
 
        
      
    </div>
    
 
                    </div>
        )
    }
}


 