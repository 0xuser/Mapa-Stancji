import React from 'react';
import { Field, reduxForm } from 'redux-form'

const SignInForm = props => {
  const { handleSubmit } = props

  return(
    <div className="login-container">
    <div className="logH">
    <h2>Logowanie</h2>
    </div>
    <div className="login-page">
    <form  className="login-form" onSubmit={handleSubmit}>
      <div className="form=group">

        <Field name="username" component="input" type="text" placeholder="Nazwa użytkownika" />
      </div>
      <div className="form=group">
      <br />
        <Field name="password" component="input" type="password" placeholder="Hasło" />
      </div>
      <br />
      <div className="form=group">
        <button type="submit">Zaloguj</button>
        <p className="message">Nie masz konta? <a href="#">Zarejestruj się</a></p>
      </div>


    </form>

    </div>
    </div>



  );
}

export default reduxForm({
  form: 'signInForm'
})(SignInForm);
