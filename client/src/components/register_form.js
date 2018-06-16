import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignInForm = props => {
  const { handleSubmit } = props;

  return(
    <form  className="" onSubmit={handleSubmit}>
      <h2>Rejestracja</h2>
      
      <div className="form-group">
        <Field name="firstName" component="input" type="text" placeholder="Imie" />
      </div>
      <div className="form-group">
        <Field name="lastName" component="input" type="text" placeholder="Nazwisko"  />
      </div>
      <div className="form-group">
        <Field name="phoneNumber" component="input" type="text"  placeholder="Numer telefonu"  />
      </div>
      <div className="form-group">
        <Field name="email" component="input" type="email"  placeholder="Adres e-mail"  />
      </div>
      <div className="form-group">
        <Field name="userName" component="input" type="text"  placeholder="Nick" />
      </div>
      <div className="form-group">
        <Field name="password" component="input" type="password"  placeholder="Hasło" />
      </div>
      <div className="form-group">
        <button type="submit">Rejestruj</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'registerForm'
})(SignInForm);
