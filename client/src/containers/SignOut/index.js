import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Message, Button } from 'semantic-ui-react';

import { signOut } from '../../actions/auth';

class SignOut extends Component {

  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <Container>
        <Message style={{margin:'100px 0 0 0'}}negative header="We're sorry to see you go :("/>
        <Button as={Link} to='/signup' content='Go back to sign up'/>
      </Container>
    );
  }
}

export default connect(null, { signOut })(SignOut);
