import React from 'react';
import { Field, reduxForm } from 'redux-form'

const SignInForm = props => {
  const { handleSubmit } = props;

  return(
    <div className="login-container">
    <div className="logH">
    <h2>Rejestracja</h2>
    </div>
    <form  className="login-form" onSubmit={handleSubmit}>
      <div className="form=group">

        <Field name="firstName" component="input" type="text" placeholder="Imię"/>
      </div>
      <div className="form=group"><br />

        <Field name="lastName" component="input" type="text" placeholder="Nazwisko"/>
      </div>
      <div className="form=group"><br />

        <Field name="phoneNumber" component="input" type="text" placeholder="Numer telefonu" />
      </div>
      <div className="form=group"><br />

        <Field name="email" component="input" type="email" placeholder="Adres email"/>
      </div>
      <div className="form=group"><br />

        <Field name="userName" component="input" type="text" placeholder="Nazwa użytkownika"/>
      </div>
      <div className="form=group"><br />

        <Field name="password" component="input" type="password" placeholder="Hasło"/>
      </div>
      <div className="form=group"><br />
        <button type="submit">Zarejestruj sie</button>
      </div>

    </form>
        </div>
  );
}

export default reduxForm({
  form: 'registerForm'
})(SignInForm);
