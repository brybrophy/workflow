import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavLogo from 'components/NavLogo';
import PipesHero from 'components/PipesHero';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const WelcomeNav = React.createClass({
  render() {

    const styleAppBar = {
      height: '100vh',
      paddingRight: '70px'
    };

    const styleCloud1 = {
      bottom: '130px',
      position: 'relative',
      right: '10px',
      width: '200px',
      zIndex: '-1000'
    };

    const styleCloud2 = {
      bottom: '730px',
      left: '530px',
      position: 'relative',
      width: '200px',
      zIndex: '-1000'
    };

    const styleCloud3 = {
      bottom: '630px',
      left: '830px',
      position: 'relative',
      width: '200px',
      zIndex: '-1000'
    };

    const styleFlatButton = {
      height: '125px',
      lineHeight: '125px',
      minWidth: '60px'
    };

    const styleFlatButtonAlt = {
      height: '125px',
      lineHeight: '125px',
      minWidth: '60px'
    };

    const styleFlatButtonLabel = {
      fontFamily: 'MontserratLight',
      fontSize: '1.2rem',
      letterSpacing: '0.12rem',
      padding: '0'
    };

    const styleFlatButtonLabelAlt = {
      border: '3px solid white',
      fontFamily: 'MontserratLight',
      fontSize: '1.4rem',
      letterSpacing: '0.12rem',
      margin: '0 10px',
      padding: '8px'
    };

    const styleIconLeft = {
      height: '125px',
      lineHeight: '125px',
      marginLeft: '35px',
      marginTop: '20px'
    };

    const styleNavbarLine = {
      color: 'white',
      fontFamily: 'MontserratHairline',
      fontSize: '2rem',
      marginLeft: '18px',
      marginRight: '15px',
      paddingTop: '30px'
    };

    const stylePipesHero = {
      left: '45px',
      position: 'absolute',
      top: '125px'
    };

    const styleSubTitle = {
      fontFamily: 'MontserratHairline',
      fontSize: '1.7rem',
      marginLeft: '10px',
      position: 'relative',
      top: '-2px'
    };

    const styleTitle = {
      cursor: 'pointer',
      fontFamily: 'MontserratLight',
      fontSize: '1.2rem',
      height: '125px',
      letterSpacing: '0.12rem',
      lineHeight: '71px',
      marginTop: '20px'
    };


    return <AppBar
      iconElementLeft={<NavLogo />}
      iconStyleLeft={styleIconLeft}
      style={styleAppBar}
      title={<h1>workflow <span className="hairline-font">|</span>
        <span style={styleSubTitle}>Job Search Management</span>
      </h1>}
        titleStyle={styleTitle}
      >

      <div style={stylePipesHero}>
        <PipesHero />
        <div style={styleCloud1}><img src="images/cloud_1.svg"/></div>
        <div style={styleCloud2}><img src="images/cloud_2.svg"/></div>
        <div style={styleCloud3}><img src="images/cloud_3.svg"/></div>

        <h1>
          JOB SEARCH MANAGMENT<br />
          FOR A NEW ERA
        </h1>
      </div>

      <h1 style={styleNavbarLine}> | </h1>

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


    </AppBar>
  }
});

export default WelcomeNav;
