import React from 'react';
import { Field, reduxForm } from 'redux-form'

const SignInForm = props => {
  const { handleSubmit } = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">e-mail</label>
        <Field name="email" component="input" type="email" />
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