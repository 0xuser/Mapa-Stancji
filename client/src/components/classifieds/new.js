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
      lon : 19.9449799,
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
  
  render(){
    const krakow = {
      lon : 19.9449799,
      lat : 50.0646501
    }

    return(
      <div>
        <CreateForm onSubmit={this.submit} />
        <SearchBar onSearch={this.onSearch}/>
        <GMap origin={krakow} />
      </div>
    );
  }
}

export default connect(null,{ createOffer, searchAddress })(ClassifiedNew);