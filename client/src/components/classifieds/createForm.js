import React from 'react';
import { Field, reduxForm } from 'redux-form'

const CreateForm = props => {
  const { handleSubmit } = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tytuł</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Opis</label>
        <Field name="description" component="textarea" />
      </div>
      <div>
        <label htmlFor="cost">Cena</label>
        <Field name="cost" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="persons">Ilość osób</label>
        <Field name="persons" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="area">Powierzchnia</label>
        <Field name="area" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="city">Miasto</label>
        <Field name="city" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="district">Dzielnica</label>
        <Field name="district" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="street">Ulica</label>
        <Field name="street" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="buildingNum">Budynek</label>
        <Field name="buildingNum" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="flatNum">Mieszkanie</label>
        <Field name="flatNum" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lat">lat</label>
        <Field name="lat" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lng">lng</label>
        <Field name="lng" component="input" type="text"/>
      </div>
      <div>
        <Field name="type" component="input" type="radio" value="0" />Pokój
        <Field name="type" component="input" type="radio" value="1" />Mieszkanie
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'createForm'
})(CreateForm)