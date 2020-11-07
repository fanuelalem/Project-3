import React, { Component } from 'react'
import {Container,Header,Image,Segment,Grid,Button,Divider,Form,Icon } from 'semantic-ui-react'
import './../../index.css'
import logo from './../../components/Images/Logo.png'
 import { Field, reduxForm, SubmissionError } from 'redux-form';
 import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER} from '../../actions/types';
import { Link } from 'react-router-dom';

import pic from './../../components/Images/pexelpic.jpg'

class SignIn extends Component {

    onSubmit = async (formValues, dispatch) => {
        try {
         const { data } = await axios.post('/api/auth/signin', formValues);
         localStorage.setItem('token', data.token);
         dispatch({ type: AUTH_USER, payload: data.token });
         this.props.history.push('/watchlist');
       } catch (e) {
          throw new SubmissionError({
           email: 'Please try again',
           password: 'You entered a bad password',
           _error: 'Login Failed'
         });
       }
     }
   
     
     renderEmail = ({input,meta}) => {
        return(
         <Form.Input
         {...input}
         error={meta.touched && meta.error}
         fluid
         icon='user'
         iconPosition='left'
         autoComplete='off'
         placeholder='Email Address'
         />
       )
     }
     renderPassword = ({ input, meta }) => {
       return (
         <Form.Input
           {...input}
           error={meta.touched && meta.error }
           fluid
           type='password'
           icon='lock'
           placeholder='password'
           autoComplete='off'
           iconPosition='left'
         />
       );
     }


    render() {
        const {handleSubmit,invalid,submitting,submitFailed}=this.props

        return (
            <div>

           
   <div className="background"style={{minHeight:'606px'}}>

<div className="info">
 
 
<Container >

 <div className='j'>
 <Image className='im'src={logo}/>
  
 </div>
 <h1 className='node'> 10/10 Stock Tracker</h1>
  
 <p className='description'>Add stocks to your watchList with the 10/10 stock tracking app. It will give users insight on top 10 daily stock gainers and losers, Allow you to search for any stock in the market, as well as share and connect with a community.</p>
 
   <Link
   as ={Link}
 
   to="/signup"
   >
   <button className='buttn' style={{color:'#333',padding:'10px 16px'}}> <Icon name='lightning'></Icon>Get Started on your own account</button>

   </Link>
 <Link
 as ={Link}
 
 to="/search-stock">
 {/* <button className='buttn2' style={{color:'white',padding:'10px 16px'}}> <Icon name='download'></Icon> Sign-in</button> */}
<Link
as={Link}
to='/searchstock'
>
<Button  color='purple'> <Icon name='download'></Icon><span className='buttn2'> Search Stocks</span>  </Button>

</Link>

  </Link>
  
     
    </Container>
 

    </div>

       </div>
       
 

        <div className='l'>
 

<Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
                View the top 10 stock Market daily winners and losers, and lookup any stock.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Open the winners or losers tab to check the daily stock market winners and losers. In the watchlist tab, you may search stocks by their ticker to find extra information and details about the company.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Save stocks onto a watchlist and join the 10/10 stock community to see trends.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            You May also enter stocks onto the watchlist to manage and keep track of your favorite stocks. The community tab will allow you to view popular stocks among other users.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={pic}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <Link
 as ={Link}
 
 to="/signup">
 {/* <button className='buttn2' style={{color:'white',padding:'10px 16px'}}> <Icon name='signup'></Icon> Register</button> */}
<Button color='purple'> <Icon name='signup'></Icon><span className='buttn2'> Register</span>  </Button>
 </Link>          
 
 </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <div style={{ padding: '6em 0em' }}>

<Container >

     <Grid divided='vertically'>
<Grid.Row columns={2}>
<Grid.Column>
<h1 className='how-it-works'style={{fontSize:'2.5rem'}}>How This simple app works</h1>     
<p className='how-it-works'style={{fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>This application will provide information on the stock markets top 10 winners and gainers of the day. It gives users an informative insight and allows them to manage them in a watchlist. Users can also share and connect with other users.</p>
</Grid.Column>
<Grid.Column>
<h1 className='mission'className='motiv'style={{fontSize:'2.5rem'}}>Mission </h1>     
<p style={{fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>
Our motivation when building this application was to provide users with informative insight on the stock market, and to encourage people from all backgrounds to become an informed investor. Our group focused on creating an inviting atmosphere for people unfamiliar with the stock market.</p>      </Grid.Column>
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
          <div><p style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>This application will provide information on the stock markets top 10 winners and gainers of the day. It gives users an informative insight and allows them to manage them in a watchlist. Users can also share and connect with other users.</p></div>
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
        <Image className='img' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image className='img'src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image className='img'src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image className='img'src='https://react.semantic-ui.com/images/wireframe/image.png' />
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
    
 
                    </div>
        )
    }
}


export default reduxForm({ form: 'signin' })(SignIn);
