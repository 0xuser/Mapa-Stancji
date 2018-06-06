import React, { Component } from 'react';
import { connect } from 'react-redux';

class GMap extends Component {
  constructor(props){
    super(props);
    this.marker = null;
  }

  initMap(){
    this.map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.origin.lat,
        lng: this.props.origin.lng
      }
    });
  }

  componentDidMount(){
    this.initMap();
  }

  componentDidUpdate(){
    if(this.marker){
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: this.props.lat,
        lng: this.props.lng 
      }
    });
    
    this.map.panTo({
      lat: this.props.lat, 
      lng: this.props.lng
    })
    
  }
  render() {
    return <div className="map" ref="map" id="map"/>
  }
}

export default connect(state => state.searchedAddress)(GMap);