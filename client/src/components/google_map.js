import React, { Component } from 'react';

class GoogleMap extends Component {

  constructor(props){
    super(props);

    this.markers = [];
  }
  
  initMap(){
    this.map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.origin.lat,
        lng: this.props.origin.lon
      }
    });
  }

  componentDidMount(){
    this.initMap();
  }

  setMapOnAll(map) {
        this.markers.forEach(marker => {
      marker.setMap(map);
    });
      }

  clearMarkers(){
    this.setMapOnAll(null);
    this.markers = [];
  }

  componentDidUpdate(){
    this.clearMarkers();

    const shapes = [
      'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
      'M22-48h-44v43h16l6 5 6-5h16z',
    ];
    
    this.props.offers.forEach(offer => {
      const pos = {
        lat: offer.geolocation.lat, 
        lng: offer.geolocation.lng
      };	

      var marker = new google.maps.Marker({
        map: this.map,
        position: pos,
        title:'Title',
        icon: {
          path: shapes[offer.type],
          fillColor: '#ef0072',
          fillOpacity: 1,
          strokeColor: '',
          strokeWeight: 0
        }
      });

      this.markers.push(marker);
    });
  }

  render() {
    return <div className="map" ref="map" id="map"/>
  }
}

export default GoogleMap;