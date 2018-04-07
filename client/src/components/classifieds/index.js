import React, { Component } from 'react';
import GoogleMap from '../google_map';

export default class ClassifiedsIndex extends Component {
  
  render() {
    const lon = 19.9449799;
    const lat = 50.0646501;
    return (
      <div className="container-fluid classified-main">

          <div className="row">
            <div className="col-md-5">
              <h3>Filter</h3>
            </div>
            <div className="col-md-7">
              <GoogleMap lon={lon} lat={lat} />
            </div>
          </div>
      </div>
    );
  }
}