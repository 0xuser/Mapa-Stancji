import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/index'
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
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
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

  //  var myJson = JSON.stringify(myObj);
  //  console.log(myJson);
    axios.post('http://127.0.0.1:8081/classfieldmap-backend/public/users/fbregister',myObj)
    .then(res => {

      console.log(res);
      console.log(res.data);

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

        <p>Nie masz konta? <Link to='/register'>Zarejestruj się</Link></p>
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

export default connect(null,{ loginUser })(SignIn);
