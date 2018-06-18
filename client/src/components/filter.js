import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/index';
import {PersonsInput, AreaInput, PriceInput, TypeInput} from '../components/filter_components';

class Filter extends Component {

  constructor(props){
    super(props);
    this.state = {
      type: 0,
      min_price: '',
      max_price: '',
      min_area: '',
      max_area: '',
      persons: '',
      room:0,
      flat: 0
    };
  }

  componentDidMount(){
    this.props.fetchOffers();
  }

  formChange(e){
    var state = this.state;

    if(e.target.type == "checkbox"){
      state[e.target.name] = e.target.checked;
    }else{
      state[e.target.name] = e.target.value;
    }

    this.setState({state: state});
    this.props.fetchOffers(this.state);
  }

  render(){
    return(
      <div className="c-filters">
        <form onChange={(e) => this.formChange(e)}>
          <div className="f-type filter">
            <TypeInput />
          </div>
          <div className="f-info filter">
            <PersonsInput />
            <AreaInput />
          </div>
          <div className="f-price filter">
            <PriceInput />
          </div>
        </form>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchOffers }, dispatch)
}

export default connect(null, mapDispatchToProps)(Filter);
