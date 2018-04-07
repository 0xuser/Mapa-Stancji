import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions/index';
import GoogleMap from '../google_map';
import Header from '../header';

class ClassifiedsIndex extends Component {

  componentDidMount(){
    this.props.fetchOffers('bbb');
  }

  render() {
    const lon = 19.9449799;
    const lat = 50.0646501;
    const { handleSubmit } = this.props;
    console.log(this.props.offers);
    
    return (
      <div className="classified-cont">
          <Header />
          <div className="c-filters">
            
          </div>
          <div className="main">
            <div className="c-list">
              <h3>List</h3>
            </div>
            <div className="c-map">
              <GoogleMap lon={lon} lat={lat} />
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {offers: state.offers}
}

export default connect(mapStateToProps, { fetchOffers })(ClassifiedsIndex);