import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {
  Form,
  Segment,
  Button,
  Container,
  Image,
  Header,
  Grid,
  Message,
  Icon,
} from 'semantic-ui-react';
import logo from './../../components/Images/Logo.png';
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER } from '../../actions/types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import fanuel from './../../components/Images/fanuel.jpg';
import ganesh from './../../components/Images/ganesh.png';
import vanessa from './../../components/Images/vanessa.jpeg';
import husam from './../../components/Images/husam.jpeg';
import './../../index.css';

class SignIn extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signin', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push('/watchlist');
    } catch (e) {
      throw new SubmissionError({
        username:'please try again',
        email: 'Please try again',
        password: 'You entered a bad password',
        _error: 'Login Failed',
      });
    }
  };

  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={meta.touched && meta.error}
        icon="user"
        iconPosition="left"
        autoComplete="off"
        placeholder="Email Address"
      />
    );
  };

  renderUserName = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={meta.touched && meta.error}
        icon="user"
        iconPosition="left"
        autoComplete="off"
        placeholder="username"
      />
    );
  };

  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        fluid
        type="password"
        icon="lock"
        placeholder="password"
        autoComplete="off"
        iconPosition="left"
      />
    );
  };

  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: #532f8c; }'}</style>
        </Helmet>

        <Grid
          textAlign="center"
          style={{ height: '85vh', margin: '0px 0 25px 0' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Form size="large" onSubmit={handleSubmit(this.onSubmit)}>
              <Segment style={{ backgroundColor: '#f7f8fa' }}>
                <Header
                  color="grey"
                  textAlign="center"
                  style={{ fontSize: '34px' }}
                >
                  <Image
                    style={{ backgroundColor: 'white' }}
                    className="im"
                    src={logo}
                  />
                  Log-in to your account
                </Header>
                <Field
                  name="username"
                  component={this.renderUserName}
                  validate={[
                    required({ msg: 'username is required' }),
                  ]}
                />
                <Field
                  name="email"
                  component={this.renderEmail}
                  validate={[
                    required({ msg: 'Email is required' }),
                    email({ msg: 'You must provide a valid email address' }),
                  ]}
                />

                <Field
                  name="password"
                  component={this.renderPassword}
                  validate={[required({ msg: 'you must provide a password' })]}
                />
                <Button
                  content="Sign In"
                  color="purple"
                  fluid
                  size="large"
                  type="submit"
                  disabled={invalid || submitting || submitFailed}
                />
              </Segment>
            </Form>
            <Message style={{ backgroundColor: '#f7f8fa' }}>
              New to the site?
              <Button
                as={Link}
                to="/signup"
                color="purple"
                size="small"
                compact
                style={{ marginLeft: '5px' }}
              >
                Sign Up Here
              </Button>
            </Message>
          </Grid.Column>
        </Grid>

        <div className="div-tag1" style={{ backgroundColor: '#222222' }}>
          <Container>
            <Segment vertical>
              <Grid columns={3} divided>
                <Grid.Row>
                  <Grid.Column>
                    <h1 style={{ color: 'white' }} className="how-it-works">
                      10/10 Stock Tracker
                    </h1>
                    <div>
                      <p
                        style={{
                          color: 'white',
                          fontSize: '1.25rem',
                          fontFamily:
                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                        }}
                      >
                        This application is a helpful tool to save stocks onto a
                        personal watchlist. It provides information on the stock
                        markets top 10 winners and losers of the day. Users can
                        also search and track any stock in the market and view
                        stocks that are trending among other users.
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <h1 style={{ color: 'white' }} className="how-it-works">
                      {' '}
                      Get Started
                    </h1>
                    <p
                      style={{
                        color: 'white',
                        fontSize: '1.25rem',
                        fontFamily:
                          '"Helvetica Neue",Helvetica,Arial,sans-serif',
                      }}
                    >
                      {' '}
                      Get access to your Watchlist by creating an account.
                    </p>
                    <Link as={Link} to="/signup">
                      <Button color="purple"> Register Now</Button>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <h1 style={{ color: 'white' }} className="how-it-works">
                      {' '}
                      Contact Us
                    </h1>
                    <p
                      style={{
                        color: 'white',
                        fontSize: '1.25rem',
                        fontFamily:
                          '"Helvetica Neue",Helvetica,Arial,sans-serif',
                        marginBottom: '10px',
                      }}
                    >
                      {' '}
                      <span>
                        {' '}
                        <a
                          href="mailto:fanuelnalem@outlook.com"
                          style={{ color: 'white' }}
                        >
                          {' '}
                          <Icon name="mail"></Icon>Send Feedback
                        </a>{' '}
                      </span>
                    </p>

                    <h1
                      className="how-it-works"
                      style={{
                        color: 'white',
                        marginTop: '0',
                        marginBottom: '18px',
                      }}
                    >
                      Developed By
                    </h1>
                    <div>
                      <Grid>
                        <Grid.Row columns={4}>
                          <Grid.Column>
                            <Image className="img" src={vanessa} />
                          </Grid.Column>
                          <Grid.Column>
                            <Image className="img" src={husam} />
                          </Grid.Column>
                          <Grid.Column>
                            <Image className="img" src={fanuel} />
                          </Grid.Column>
                          <Grid.Column>
                            <Image className="img" src={ganesh} />
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <p
              style={{
                backgroundColor: 'rgb(55, 55, 59)',
                padding: '10px',
                borderRadius: '5px',
                color: 'white',
                fontSize: '1.25rem',
                fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
              }}
              className="p-tag"
            >
              Copyright 2020. All rights reserved.
            </p>
          </Container>
        </div>
      </div>
    );
  }
}
export default reduxForm({ form: 'signin' })(SignIn);
