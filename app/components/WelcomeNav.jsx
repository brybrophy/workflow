import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavLogo from 'components/NavLogo';
import PipesHero from 'components/PipesHero';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FitText from 'react-fittext';

const WelcomeNav = React.createClass({
  render() {

    const styleCloud1 = {
      bottom: '140px',
      display: 'inline-block',
      left: '40px',
      position: 'relative'
    };

    const styleCloud2 = {
      bottom: '600px',
      display: 'inline-block',
      left: '350px',
      position: 'relative',
      width: '200px'
    };

    const styleCloud3 = {
      bottom: '430px',
      display: 'inline-block',
      left: '430px',
      position: 'relative',
      width: '200px'
    };

    const styleFlatButton = {
      height: '120px',
      lineHeight: '120px',
      minWidth: '60px'
    };

    const styleFlatButtonAlt = {
      height: '125px',
      lineHeight: '120px',
      minWidth: '60px'
    };

    const styleFlatButtonLabel = {
      bottom: '5px',
      fontFamily: 'MontserratLight',
      fontSize: '1.2rem',
      letterSpacing: '0.12rem',
      padding: '0',
      position: 'relative'
    };

    const styleFlatButtonLabelAlt = {
      border: '3px solid white',
      bottom: '5px',
      fontFamily: 'MontserratLight',
      fontSize: '1.4rem',
      letterSpacing: '0.12rem',
      margin: '0 10px',
      padding: '8px',
      position: 'relative'
    };

    const styleNav = {
      backgroundColor: '#47B4E0',
      height: '100vh',
      paddingRight: '70px',
      zIndex: '-1000'
    };

    const styleNavButtonGroup = {
      bottom: '10px',
      display: 'inline-block',
      left: '530px',
      position: 'relative'
    }

    const styleNavLogo = {
      display: 'inline-block',
      marginLeft: '60px',
      marginTop: '40px'
    };

    const styleNavLine1 = {
      color: 'white',
      display: 'inline-block',
      fontFamily: 'MontserratHairline',
      fontSize: '3rem',
      marginLeft: '20px',
      paddingTop: '30px'
    };

    const styleNavLine2 = {
      color: 'white',
      display: 'inline-block',
      fontFamily: 'MontserratHairline',
      fontSize: '2.5rem',
      marginLeft: '130px',
      marginRight: '10px'
    };

    const stylePipesHero = {
      left: '55px',
      position: 'absolute'
    };

    const styleSubTitle = {
      fontFamily: 'MontserratHairline',
      fontSize: '1.7rem',
      marginLeft: '10px',
      position: 'relative',
      top: '-2px'
    };

    const styleTitle = {
      bottom: '10px',
      color: 'white',
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'MontserratLight',
      fontSize: '3.5rem',
      left: '10px',
      letterSpacing: '0.12rem',
      position: 'relative'
    };

    const styleTopRow = {
    };


    return <nav style={styleNav}>
      <Row>
        <Col
          xs={12}
          style={styleTopRow}
        >
          <div style={styleNavLogo}>
            <NavLogo />
          </div>
          <h1 style={styleTitle}>
            workflow
            <span className="hairline-font" style={styleNavLine1}>|</span>
            <span style={styleSubTitle}> Job Search Management</span>
          </h1>

        <div style={styleNavButtonGroup}>
          <h1 style={styleNavLine2}> | </h1>

          <FlatButton
          label="Login"
          labelStyle={styleFlatButtonLabel}
          style={styleFlatButton}
          />

          <FlatButton
          label="Sign Up"
          style={styleFlatButtonAlt}
          labelStyle={styleFlatButtonLabelAlt}
          />
        </div>
        </Col>

      </Row>


      <Row>
        <Col xs={12} md={12} style={{left: '47px'}}>
        <PipesHero style={stylePipesHero} />
        </Col>
        <div style={styleCloud1}><img src="images/cloud_1.svg"/></div>
        <div style={styleCloud2}><img src="images/cloud_2.svg"/></div>
        <div style={styleCloud3}><img src="images/cloud_3.svg"/></div>

        <div>
        <h1 style={{display: 'inline-block', position: 'absolute', bottom: '400px' }}>
        JOB SEARCH MANAGMENT<br />
        FOR A NEW ERA
        </h1>
        </div>
      </Row>

    </nav>
  }
});

export default WelcomeNav;
