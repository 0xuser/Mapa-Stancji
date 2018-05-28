import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/index'
import SignInForm from './sign_in_form';

class SignIn extends Component {
  submit = values => {
    this.props.loginUser(values, () => this.props.history.push('/'));
  }
  
  render(){
    return(
      <SignInForm onSubmit={this.submit} />
    );
  }
}

export default connect(null,{ loginUser })(SignIn);