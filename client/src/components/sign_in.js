import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './header';
import {authenticate} from '../actions/index'
import SignInForm from './sign_in_form';

class SignIn extends Component {
  submit = values => {
    this.props.authenticate(values);
  }
  
  render(){
    return(
      <div>
        <Header />
        <SignInForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(null,{ authenticate })(SignIn);