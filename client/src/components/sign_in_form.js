import React from 'react';
import { Field, reduxForm } from 'redux-form'

const SignInForm = props => {
  const { handleSubmit } = props

  return(
    <form  className="login-form" onSubmit={handleSubmit}>
      <div className="form=group">
        <label htmlFor="username">username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div className="form=group">
        <label htmlFor="password">password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div className="form=group">
        <button type="submit">Login</button>
      </div>
      
    </form>
  );
}

export default reduxForm({
  form: 'signInForm'
})(SignInForm);