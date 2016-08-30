import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobMap = React.createClass({
  getInitialState() {
    return {
      latLngLocation: {
        lat: 47.622472,
        lng: -122.336505
      }
    };
  },

  componentWillMount() {
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.props.address }, (res, status) => {
      // eslint-disable-next-line no-undef
      if (status === google.maps.GeocoderStatus.OK) {
        const newLat = res[0].geometry.location.lat();
        const newLng = res[0].geometry.location.lng();

        this.setState({ latLngLocation: { lat: newLat, lng: newLng }});
      }
    });
  },

  createMapOptions() {
    return {
      scrollwheel: false
    };
  },

  render() {
    const styleMapContainer = {
      borderRadius: '5px',
      height: '100%',
      marginBottom: '10px'
    };

    return <Paper style={styleMapContainer}>
      <GoogleMapLoader
        containerElement={<div style={{ height: '265px' }} />}
        googleMapElement={<GoogleMap
          center={this.state.latLngLocation}
          defaultZoom={16}
          options={{ scrollwheel: false }}
        >
          <Marker position={this.state.latLngLocation} />
        </GoogleMap>}
      />
    </Paper>;
  }
});

export default JobMap;
