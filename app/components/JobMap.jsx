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

  createMapOptions() {
    return {
      scrollwheel: false
    }
  },

  render() {
    const styleMapContainer = {
      borderRadius: '0 0 10px 10px',
      height: "100%",
      margin: '-10px 0 10px 0'
    };

    return <Paper style={styleMapContainer}>
      <GoogleMapLoader
        containerElement={<div style={{ height: "165px" }} />}
        googleMapElement={<GoogleMap
          defaultZoom={16}
          center={this.state.latLngLocation}
          options={{
            scrollwheel: false,
          }}
        >
          <Marker position={this.state.latLngLocation}/>
        </GoogleMap>}
      />
    </Paper>;
  }
});

export default JobMap;
