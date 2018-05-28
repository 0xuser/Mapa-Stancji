import React from 'react';
import { Field, reduxForm } from 'redux-form'

const SignInForm = props => {
  const { handleSubmit } = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default reduxForm({
  form: 'signInForm'
})(SignInForm);