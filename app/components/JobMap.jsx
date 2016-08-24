import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import Paper from 'material-ui/Paper'
import React from 'react';

const JobMap = React.createClass({
  getInitialState() {
    return {
      latLngLocation: {
        lat: 47.622472,
        lng: -122.336505
      }
    }
  },

  componentWillMount() {
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: this.props.address}, (res, status) => {
      if(status == google.maps.GeocoderStatus.OK) {
        const newLat = res[0].geometry.location.lat();
        const newLng = res[0].geometry.location.lng();

        this.setState({ latLngLocation: {lat: newLat, lng: newLng }});
      }
    });
  },

  render() {
    return <Paper style={{height: "100%"}} zDepth={2}>
      <GoogleMapLoader
        containerElement={<div style={{ height: "270px" }} />}
        googleMapElement={<GoogleMap
          defaultZoom={16}
          center={this.state.latLngLocation}
        >
          <Marker position={this.state.latLngLocation}/>
        </GoogleMap>}
      />
    </Paper>;
  }
});

export default JobMap;
