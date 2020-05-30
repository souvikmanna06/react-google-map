import React from 'react';
import { GooggleMap, GoogleApiWrapper, withGoogleMap, Marker, InfoWindow } from 'google-maps-react';

function Map() {
  return (
    <GooggleMap
      defaultZoom={10}
      defaultCenter={{ lat: 12.9716, lang: 77.5946 }}
      defaultOptions={{ styles: mapStyles }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Hello() {
  return (
    
    <div>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );

};
