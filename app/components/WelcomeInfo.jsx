import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const WelcomeInfo = React.createClass({
  render() {
    const styleColumn = {
      padding: '100px 50px',
      textAlign: 'center'
    }

    const styleExtraMargin = {
      marginTop: '35px',
      position: 'relative',
      right: '10px'
    }

    const styleIconContainer = {
      backgroundColor: '#EAE3DC',
      borderRadius: '100%',
      height: '300px',
      marginBottom: '50px',
      padding: '45px',
      width: '300px'
    }

    const styleInfoText = {
      color: '#474543',
      fontFamily: 'MontserratLight',
      fontSize: '1.9rem',
      letterSpacing: '0.12rem',
      lineHeight: '30px'
    }

    return <Grid>
      <Row>
        <Col xs={12} md={4} style={styleColumn}>
          <div style={styleIconContainer}>
            <img src="images/manage_flow.svg" />
          </div>

          <h3>MANAGE INTERVIEW FLOW</h3>

          <img src="images/line.svg" style={{margin: '20px 0'}} />

          <p style={styleInfoText}>
            Preparing for interviews is stressfull enough without worrying about scheduling. We’ll tell you when to be where and when to follow up after your interviews.
          </p>
        </Col>

        <Col xs={12} md={4} style={styleColumn}>
        <div style={styleIconContainer}>
          <img src="images/connect_contacts.svg" style={styleExtraMargin}/>
        </div>

        <h3>CONNECT CONTACTS</h3>

        <img src="images/line.svg" style={{margin: '20px 0'}} />

        <p style={styleInfoText}>
          Match your contacts to perspective employers. After all, it’s all about who you know.
        </p>
        </Col>

        <Col xs={12} md={4} style={styleColumn}>
        <div style={styleIconContainer}>
          <img src="images/right_place.svg" />
        </div>

        <h3>EVERYTHING IN IT'S RIGHT PLACE</h3>

        <img src="images/line.svg" style={{margin: '20px 0'}} />

        <p style={styleInfoText}>
          You’re sending out dozens of applications per week. We have the tools to help you keep track of them all.
        </p>
        </Col>
      </Row>
    </Grid>
  }
});

export default WelcomeInfo;
