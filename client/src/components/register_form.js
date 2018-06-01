import React from 'react';
import { Field, reduxForm } from 'redux-form'

const SignInForm = props => {
  const { handleSubmit } = props;

  return(
    <form  className="login-form" onSubmit={handleSubmit}>
      <div className="form=group">
        <label htmlFor="firstName">firstName</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div className="form=group">
        <label htmlFor="lastName">lastName</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div className="form=group">
        <label htmlFor="phoneNumber">phoneNumber</label>
        <Field name="phoneNumber" component="input" type="text" />
      </div>
      <div className="form=group">
        <label htmlFor="email">email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div className="form=group">
        <label htmlFor="userName">userName</label>
        <Field name="userName" component="input" type="text" />
      </div>
      <div className="form=group">
        <label htmlFor="password">password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div className="form=group">
        <button type="submit">Register</button>
      </div>
      
    </form>
  );
}

export default reduxForm({
  form: 'registerForm'
})(SignInForm);