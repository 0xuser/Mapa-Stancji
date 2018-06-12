import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class CreateForm extends Component{

  componentDidUpdate(){
    // document.getElementById("buildingNum").value = this.props.street_number;
    // document.getElementById("route").value = this.props.route;
    // document.getElementById("district").value = this.props.sublocality_level_1;
    // document.getElementById("city").value = this.props.locality;
    // document.getElementById("lat").value = this.props.lat;
    // document.getElementById("lng").value = this.props.lng;
  }
  test(){
    // this.props.change('buildingNum', this.props.street_number, undefined);
    // this.props.change('street', this.props.route, undefined);
    // this.props.change('district', this.props.sublocality_level_1, undefined);
    // this.props.change('city', this.props.locality, undefined);
    // this.props.change('lat', this.props.lat, undefined);
    // this.props.change('lng', this.props.lng, undefined);
  }

  componentDidUpdate(){
    this.props.change('buildingNum', this.props.initialValues.buildingNum, undefined);
    this.props.change('street', this.props.initialValues.street, undefined);
    this.props.change('district', this.props.initialValues.district, undefined);
    this.props.change('city', this.props.initialValues.city, undefined);
    this.props.change('lat', this.props.initialValues.lat, undefined);
    this.props.change('lng', this.props.initialValues.lng, undefined);
  }

  componentWillReceiveProps(nextProps){
    this.props.change('buildingNum', nextProps.initialValues.buildingNum, undefined);
    this.props.change('street', nextProps.initialValues.street, undefined);
    this.props.change('district', nextProps.initialValues.district, undefined);
    this.props.change('city', nextProps.initialValues.city, undefined);
    this.props.change('lat', nextProps.initialValues.lat, undefined);
    this.props.change('lng', nextProps.initialValues.lng, undefined);
    
  }
  
  render(){
    
    const { handleSubmit } = this.props;
    
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
          <Field name="city" component="input" type="text" id="city"/>
        </div>
        <div>
          <label htmlFor="district">Dzielnica</label>
          <Field name="district" component="input" type="text" id="district"/>
        </div>
        <div>
          <label htmlFor="street">Ulica</label>
          <Field name="street" component="input" type="text" id="route"/>
        </div>
        <div>
          <label htmlFor="buildingNum">Budynek</label>
          <Field name="buildingNum" component="input" type="text" id="buildingNum" />
        </div>
        <div>
          <label htmlFor="flatNum">Mieszkanie</label>
          <Field name="flatNum" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lat">lat</label>
          <Field name="lat" component="input" type="text" id="lat" />
        </div>
        <div>
          <label htmlFor="lng">lng</label>
          <Field name="lng" component="input" type="text" id="lng"/>
        </div>
        <div>
          <Field name="type" component="input" type="radio" value="0" />Pokój
          <Field name="type" component="input" type="radio" value="1" />Mieszkanie
        </div>
        <div>
          <button type="submit" onClick={this.test.bind(this)}>Submit</button>
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