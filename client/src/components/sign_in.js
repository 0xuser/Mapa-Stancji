import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser, loginWithFb } from '../actions/index'
import SignInForm from './sign_in_form';
import { Redirect, Link } from 'react-router-dom';
import { FacebookLogin } from 'react-facebook-login-component';
import axios from 'axios';


class SignIn extends Component {
  state = {
    redirectToReferrer: false
  }

  submit = values => {
    this.props.loginUser(values, () => {
      this.props.history.push('/');
    })
  }
  responseFacebook (response) {
    var full_name = response['name'];
    var firstname = full_name.split(" ",1);
    var lastname = full_name.split(" ").pop(-1);
    var email = response['email'];
    var id = response['id'];

    var user = {
      "firstName": firstname[0],
      "lastName" : lastname,
      "phoneNumber": "0",
      "email": email,
      "facebookId" : id
    };
    console.log(user);


    const test = {
      "firstName": "Michał",
      "lastName": "Kabionek",
      "phoneNumber": "12313213",
      "email": "onwt@onet.pl",
      "facebookId": "666999666999"
    }

    this.props.loginWithFb(user, () => {
      this.props.history.push('/');
    })
  }

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return(
      <div className="classified-cont">
        <SignInForm onSubmit={this.submit} />
        <p>
          Nie masz konta?
          <Link to='/register'>Zarejestruj się</Link>
        </p>
        <FacebookLogin
          // socialId="177905746251586"
          socialId="380241462493212"
          language="en_US"
          scope="public_profile,email"
          responseHandler={this.responseFacebook.bind(this)}
          xfbml={true}
          fields="id,email,name"
          version="v2.5"
          className="facebook-login"
          buttonText="Zaloguj się przez Facebook"
        />
      </div>

    );
  }
}

export default connect(null,{ loginUser, loginWithFb })(SignIn);
