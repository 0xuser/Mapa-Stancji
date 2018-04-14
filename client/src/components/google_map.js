import React, { Component } from 'react';

class GoogleMap extends Component {
	
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
		const pos = {lat: 50.054933, lng: 19.926840};	
		const maap = this.map;
		const marker = new google.maps.Marker({
			position: pos,
			map: maap,
			title: 'MARKER'
		});
		marker.setMap(maap);

	}



	componentDidUpdate(){
	}

	render() {
		// console.log(this.map);
		const { offers } = this.props;
			
		return <div className="map" ref="map" id="map"/>
	}
}

export default GoogleMap;