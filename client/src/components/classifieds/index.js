import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions/index';

import GoogleMap from '../google_map';
import Header from '../header';
import Filter from '../../components/filter'


class ClassifiedsIndex extends Component {
  
  render() {
    const { fetchOffers, offers } = this.props;
    const lon = 19.9449799;
    const lat = 50.0646501;
   
    
    console.log('offers: ', offers);
    return (
      <div className="classified-cont">
          <Header />
        
          <Filter/>
          
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

// export default (connect(null, mapDispatchToProps)(reduxForm({ form: 'addTeam' })(themable(AddTeam))))