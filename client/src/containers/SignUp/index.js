import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button,Container,Grid ,Image,Header,Icon} from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import logo from './../../components/Images/Logo.png'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import fanuel from './../../components/Images/fanuel.jpg'
import ganesh from './../../components/Images/ganesh.png'
import vanessa from './../../components/Images/vanessa.jpeg'
import husam from './../../components/Images/husam.jpeg'


import axios from 'axios';
import './../../index.css'
import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';

class SignUp extends Component {

  renderEmail = ({input,meta}) => {
    // console.log(meta);
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
  onSubmit = async (formValues,dispatch) => {
    console.log(formValues)
    // console.log(formsProps)
    try {
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      console.log('reached')
      this.props.history.push('/watchlist');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }

  // renderEmail = ({ input, meta }) => {
  //   return (
  //     <Form.Input
  //       {...input}
  //       error={ meta.touched && meta.error }
  //       fluid
  //       icon='user'
  //       iconPosition='left'
  //       autoComplete='off'
  //       placeholder='Email Address'
  //     />
  //   );
  // }


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
    // console.log("Inside of signup render", this.props);
     const {handleSubmit, invalid, submitting, submitFailed} = this.props;
    return (
      // onSubmit={handleSubmit(this.onSubmit)}
      <div  >

<Helmet>
   <style>{'body { background-color: white; }'}</style>

         </Helmet>
         <Grid textAlign="center" style={{ height: '75vh',margin:'0px 0 99px 0' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500 }}>

 
   
      
      <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
        
        <Segment style={{backgroundColor:'#f7f8fa' }} >
        <Header color="purple" textAlign="center" style={{ fontSize: '36px' }}>
       <Image style={{backgroundColor:'white'}} className='im'src={logo} />
              Create an account
            </Header>
          <Field
          name='email'
          component={this.renderEmail}
          validate={[
            required({msg: 'Email is required'}),
            email({msg: 'You must provide a valid email address'})
          ]}
          />
          <Field
          name='password'
          component={this.renderPassword}
          validate={[
            required({msg:'You must provide a Password'}),
            length({min:6,msg:'Your password must be at least 6 characters long'})
          ]}
          />
          <Button
          content="Sign Up"
          color="purple"
          fluid
          size="large"
          type="submit"
          disabled={ invalid || submitting || submitFailed }
          />
        </Segment>
      </Form>
      </Grid.Column>
</Grid>
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



      // <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
      //   <Segment stacked>
      //     <Field
      //       name='email'
      //       iscool='mannyiscool'
      //       component={ this.renderEmail }
      //       validate={
      //         [
      //           required({ msg: 'Email is required' }),
      //           email({ msg: 'You must provide a valid email address' })
      //         ]
      //       }
      //     />
      //     <Field
      //       name='password'
      //       component={this.renderPassword}
      //       validate={
      //         [
      //           required({ msg: 'You must provide a password' }),
      //           length({ min: 6, msg: 'Your password must be at least 6 characters long' })
      //         ]
      //       }
      //     />
      //     <Button
      //       content='Sign up'
      //       color='teal'
      //       fluid
      //       size='large'
      //       type='submit'
            // disabled={ invalid || submitting || submitFailed }
      //     />
      //   </Segment>
      // </Form>
    );
  }
}

const asyncValidate = async ({email})=>{
  try {
    const {data}=await axios.get(`/api/user/emails?email=${email}`);
    if(data){
      throw new Error();
    }
  } catch (e) {
    throw{email:'email is already taken'};
  }
}
// const asyncValidate = async formValues => {
//   try {
//     const { data } = await axios.get(`/api/user/emails`);
//     const foundEmail = data.some((user)=>(user.email === formValues.email))
//     if(foundEmail){
//       throw new Error();
//     }
//     // ?email=${formValues.email}
//     // if (data) {
//     //   throw new Error();
//     // }
//   } catch (e) {
//     throw { email: 'Email already exists, please sign up with a different email' };
//   }
// }
// export default reduxForm({form:'signup'})(SignUp)
export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: [ 'email' ] })(SignUp);
// export default SignUp;