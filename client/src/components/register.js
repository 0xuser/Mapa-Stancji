import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import RegisterForm from './register_form';

class Register extends Component {

  submit = values => {
    this.props.registerUser(values, () => {
      this.props.history.push('/');
    });
  }
  
  render(){

    return(
      <div className="classified-cont">
        {this.props.error}
        <RegisterForm onSubmit={this.submit} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    error: state.signup.error
  };
}

export default connect(mapStateToProps,{ registerUser })(Register);