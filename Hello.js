import React from 'react';
import { Map, GoogleApiWrapper, withGoogleMap, Marker, InfoWindow } from 'google-maps-react';

export default class MapHome extends React{
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  
  render() {
    return (
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    )
  }
};
