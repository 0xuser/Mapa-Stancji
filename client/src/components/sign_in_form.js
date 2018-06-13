import React from 'react';
import { Field, reduxForm } from 'redux-form'

const SignInForm = props => {
  const { handleSubmit } = props

  return(
    <div className="login-container">
    <div className="logH">
    <form  className="login-form" onSubmit={handleSubmit}>
      <h2>Logowanie</h2>
      <div className="form=group">
        <label htmlFor="username">Nick</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div className="form=group">
        <label htmlFor="password">Hasło</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div className="form=group">
        <button type="submit">Zaloguj</button>
      </div>

    </form>
    </div>
    </div>
  );
}

export default reduxForm({
  form: 'signInForm'
})(SignInForm);
