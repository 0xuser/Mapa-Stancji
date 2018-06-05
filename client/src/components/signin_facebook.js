import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FacebookLogin } from 'react-facebook-login-component';
import { registerFbUser } from '../actions/index'
import axios from 'axios';

import { Redirect, Link } from 'react-router-dom';



class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    var full_name = response['name'];
    var firstname = full_name.split(" ",1);
    var lastname = full_name.split(" ").pop(-1);
    var email = response['email'];
    var id = response['id'];

    var myObj = {
      "firstName": firstname[0],
      "lastName" : lastname,
      "phoneNumber": "0",
      "email": email,
      "facebookId" : id
    };

    axios.post('http://127.0.0.1:8081/classfieldmap-backend/public/users/fbregister',myObj)
    .then(res => {

      console.log(res);
      console.log(res.data);

    })
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
