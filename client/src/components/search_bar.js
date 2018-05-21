import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      street_number: '',
      route: '',
      sublocality_level_1: '',
      locality: '',
      lat: '',
      lng: ''
    };

  }

  componentDidMount(){
    this.autocomplete = new google.maps.places.Autocomplete(
      this.refs.autocomplete,{types: ['geocode']});
  
    this.autocomplete.addListener('place_changed', this.fillInAddress.bind(this));
  }

  fillInAddress(){
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      sublocality_level_1: 'long_name',
      locality: 'long_name'
    };

    var addr = Object.create(this.state);
    var place = this.autocomplete.getPlace();
  
    for(var i=0; i< place.address_components.length; i++){
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        addr[addressType] = val;
      }
    }

    addr.lat = place.geometry.location.lat();
    addr.lng = place.geometry.location.lng();
    
    var newState = {...this.state, ...addr};
    this.setState(newState);
    this.props.onSearch(this.state);
  }
  render(){
    return(
      <input ref="autocomplete" type="search" name="search_value" />
    );
  }
}

export default SearchBar;