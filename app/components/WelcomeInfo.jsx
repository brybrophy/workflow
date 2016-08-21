import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const WelcomeInfo = React.createClass({
  render() {
    const styleColumn = {
      padding: '100px 0',
      textAlign: 'center'
    }

    const styleIconContainer = {
      backgroundColor: '#EAE3DC',
      borderRadius: '100%',
      height: '300px',
      padding: '40px',
      width: '300px'
    }

    return <Grid>
      <Row>
        <Col md={4} style={styleColumn}>
          <div style={styleIconContainer}>
            <img src="images/manage_flow.svg" />
          </div>
        </Col>

        <Col md={4} style={styleColumn}>
        <div style={styleIconContainer}>
          <img src="images/connect_contacts.svg" />
        </div>
        </Col>

        <Col md={4} style={styleColumn}>
        <div style={styleIconContainer}>
          <img src="images/right_place.svg" />
        </div>
        </Col>
      </Row>
    </Grid>
  }
});

export default WelcomeInfo;
