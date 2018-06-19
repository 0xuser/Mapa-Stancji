import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class CreateForm extends Component{

  render(){
    const { handleSubmit } = this.props;
    console.log(this.props.children);
    
    return(
      <form onSubmit={handleSubmit}>
        <h2>Dodaj ogłoszenie</h2>
        <div>
          <label htmlFor="title"></label>
          <Field name="title" component="input" type="text"  placeholder="Tytuł ogłoszenia" />
        </div>
        <div>
          <Field name="type" component="input" type="radio" value="0" />Pokój<br/>
          <Field name="type" component="input" type="radio" value="1" />Mieszkanie
        </div>
        <div>
          <label htmlFor="cost"></label>
          <Field name="cost" component="input" type="number" placeholder="Cena" />
        </div>
        <div>
          <label htmlFor="persons"></label>
          <Field name="persons" component="input" type="number" placeholder ="Liczba osób" />
        </div>
        <div>
          <label htmlFor="area"></label>
          <Field name="area" component="input" type="number" placeholder="Powierzchnia" />
        </div>
        <div>
          <label htmlFor="description"></label>
          <Field name="description" component="textarea" placeholder="Dodaj opis ogłoszenia, aby zachęcić potencjalnych wynajmujących. Informacje takie jak typ ogrzewania, internet, łazienka, pokój przechodni etc."/>
        </div>
        {this.props.children}
        <div>
          <button type="submit">Dodaj</button>
        </div>
      </form>
    );
  }
};

function mapStateToProps(state){

  return {
    ...state.searchedAddress,
  }
}

export default reduxForm({
  form: 'createForm'
})(connect(mapStateToProps)(CreateForm));
