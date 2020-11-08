import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button,Container,Image } from 'semantic-ui-react';
import logo from './../../components/Images/Logo.png'
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER} from '../../actions/types';
import './../../index.css'

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

  render(){
    const {handleSubmit,invalid,submitting,submitFailed}=this.props
    return(
 
      
       <Container className='signing-in' style={{width:'500px'}} >
 
 
      <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
        <Segment  >
            <Field
          name='email'
          component={this.renderEmail}
          validate={[
            required({msg:'Email is required'}),
            email({ msg: 'You must provide a valid email address' })
          ]}
          />
          <Field
          name='password'
          component={this.renderPassword}
          validate={[
            required({msg:'you must provide a password'})
          ]}
          />
          <Button
          content='Sign In'
          color='purple'
          fluid
          size='large'
          type='submit'
          disabled={invalid || submitting || submitFailed}
          />
        </Segment>
      </Form>
 
      </Container>
 
    )
  }
   
}
export default reduxForm({ form: 'signin' })(SignIn);
