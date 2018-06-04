import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FacebookLogin } from 'react-facebook-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
  }

  render () {
    return (
      <div>
        <FacebookLogin socialId="177905746251586"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
    );
  }

}

export default Login;
