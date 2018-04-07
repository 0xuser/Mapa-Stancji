import React, { Component } from 'react';
import GoogleMap from '../google_map';
import Header from '../header';

export default class ClassifiedsIndex extends Component {
  
  render() {
    const lon = 19.9449799;
    const lat = 50.0646501;
    return (
      <div className="classified-cont">
          <Header />
          <div className="c-filters">
            <h3>filter</h3>
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