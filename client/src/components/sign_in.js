import React, { Component } from 'react';
import { connect } from 'react-redux'
import {authenticate} from '../actions/index'
import SignInForm from './sign_in_form';

class SignIn extends Component {
  submit = values => {
    this.props.authenticate(values);
  }
  
  render(){
    return(
      <SignInForm onSubmit={this.submit} />
    );
  }
}

export default connect(null,{ authenticate })(SignIn);