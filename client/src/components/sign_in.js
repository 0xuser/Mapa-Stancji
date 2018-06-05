import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/index'
import SignInForm from './sign_in_form';
import { Redirect, Link } from 'react-router-dom';

class SignIn extends Component {
  state = {
    redirectToReferrer: false
  }

  submit = values => {
    this.props.loginUser(values, () => {
      
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
      </div>
    );
  }
}

export default connect(null,{ loginUser })(SignIn);