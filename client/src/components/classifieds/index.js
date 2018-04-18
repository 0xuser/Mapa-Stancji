import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions/index';

import GoogleMap from '../google_map';
import Header from '../header';
import Filter from '../../components/filter'
import OfferList from '../offer_list';

class ClassifiedsIndex extends Component {
  constructor(props){
    super(props);

    const offers = [];
  }
  
  render() {
    const { fetchOffers, offers} = this.props;

    const origin = {
      lon : 19.9449799,
      lat : 50.0646501
    }
  
   
    
    // console.log('offers: ', offers);
    return (
      <div className="classified-cont">
          <Header />
          <Filter/>
          
          <div className="main">
            <div className="c-list">
              <OfferList offers={offers} />
            </div>
            <div className="c-map">
              <GoogleMap origin={origin} offers={offers}/>
           
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