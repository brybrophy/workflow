import PipesHero from 'components/PipesHero';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const WelcomeHero = React.createClass({
  render() {
    const styleCloud3 = {
      display: 'inline-block',
      position: 'absolute',
      right: '450px',
      top: '70px',
      width: '200px'
    };

    const styleHero = {
      backgroundColor: '#47B4E0',
      height: '90vh'
    };

    const styleHeroHeader = {
      color: 'white',
      fontFamily: 'MontserratLight',
      position: 'relative',
      textAlign: 'center',
      top: '170px'
    }

    const styleHeroText= {
      fontFamily: 'MontserratHairline',
      fontSize: '2rem',
      letterSpacing: '0.12rem'
    }

    const stylePipes = {
      position: 'relative',
      left: '48px'
    }

    const styleRaisedButton = {
      height: '60px',
      width: '320px'
    }

    const styleRaisedButtonLabel = {
      fontFamily: 'Montserrathairline',
      fontSize: '1.8rem',
      position: 'relative',
      top: '17px'
    }

    return <Row style={styleHero}>
      <Col lg={6} style={stylePipes}>
        <PipesHero />
      </Col>
      <Col lg={6} style={styleHeroHeader}>
      <Row>
        <Col xs={12}>
          <div style={styleCloud3}><img src="images/cloud_3.svg"/></div>
          <h2 >
            JOB SEARCH MANAGMENT<br />
            FOR A NEW ERA
          </h2>
        </Col>
      </Row>
      <Row style={styleHeroText}>
        <Col xs={12}>
          <p>Organize your interviews,</p>
          <p>keep track of your contacts,</p>
          <p>measure your progress,</p>
          <p> and land your dream job.</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <RaisedButton
            backgroundColor={'#327F9E'}
            label="sign up for free"
            labelColor="white"
            labelStyle={styleRaisedButtonLabel}
            style={styleRaisedButton}
          />
      </Col>
      </Row>
      </Col>
    </Row>
  }
});

export default WelcomeHero;
