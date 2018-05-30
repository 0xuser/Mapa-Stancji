import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/index'
import SignInForm from './sign_in_form';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    redirectToReferrer: false
  }

  submit = values => {
    this.props.loginUser(values, () => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  
  render(){
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return(
      <SignInForm onSubmit={this.submit} />
    );
  }
}

export default connect(null,{ loginUser })(SignIn);