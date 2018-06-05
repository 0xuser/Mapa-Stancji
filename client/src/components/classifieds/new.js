import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreateForm from './createForm';
import {createOffer, searchAddress} from '../../actions/index'
import GMap from '../g_map';
import SearchBar from '../search_bar';

class ClassifiedNew extends Component {
  constructor(props){
    super(props);
    this.state = {
      lng : 19.9449799,
      lat : 50.0646501
    };
  }

  submit = values => {
    this.props.createOffer(values,() => {
      this.props.history.push('/');
    })
  }

  onSearch = term => {
    this.props.searchAddress(term);
  }
  
  componentDidUpdate(){
    // console.log(this.state);
    
    // const values = {
    //   city: searchedAddress.locality,
    //   stret: searchedAddress.route,
    //   flatNum: searchedAddress.street_number,
    //   lat: searchedAddress.lat,
    //   lng: searchedAddress.lng
    // }

    // this.setState({
    //   city: searchedAddress.locality,
    //   stret: searchedAddress.route,
    //   flatNum: searchedAddress.street_number,
    //   lat: searchedAddress.lat,
    //   lng: searchedAddress.lng
    // })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    
    const { searchedAddress } = nextProps;
    this.setState({
      city: searchedAddress.locality,
      street: searchedAddress.route,
      district: searchedAddress.sublocality_level_1,
      buildingNum: searchedAddress.street_number,
      lat: searchedAddress.lat,
      lng: searchedAddress.lng
    })
    
  }

  render(){
    const krakow = {
      lon : 19.9449799,
      lat : 50.0646501
    }
    console.log(this.state);
    

    return(
      <div>
        <CreateForm onSubmit={this.submit} initialValues={this.state}/>
        <SearchBar onSearch={this.onSearch} />
        <GMap origin={krakow} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    searchedAddress: state.searchedAddress
  }
}

export default connect(mapStateToProps,{ createOffer, searchAddress })(ClassifiedNew);