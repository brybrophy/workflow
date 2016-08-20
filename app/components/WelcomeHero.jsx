import PipesHero from 'components/PipesHero';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const WelcomeHero = React.createClass({
  render() {
    const styleCloud3 = {
      display: 'inline-block',
      left: '90px',
      position: 'relative',
      top: '150px',
      width: '200px'
    };

    const styleHero = {
      backgroundColor: '#47B4E0',
      height: '90vh'
    };

    const styleHeroHeader = {
      color: 'white',
      display: 'inline-block',
      fontFamily: 'MontserratLight',
      position: 'relative',
      textAlign: 'center',
      top: '225px'
    }

    const stylePipes = {
      position: 'relative',
      left: '48px'
    }

    return <Row style={styleHero}>
      <Col lg={6} style={stylePipes}>
        <PipesHero />
      </Col>
      <Col lg={6}>
      <div style={styleCloud3}><img src="images/cloud_3.svg"/></div>

      <h2 style={styleHeroHeader}>
        JOB SEARCH MANAGMENT<br />
        FOR A NEW ERA
      </h2>
      </Col>
    </Row>
  }
});

export default WelcomeHero;
