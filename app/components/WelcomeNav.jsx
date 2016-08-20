import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavLogo from 'components/NavLogo';
import React from 'react';

const WelcomeNav = React.createClass({
  render() {
    const styleAppBar = {
      boxShadow: 'none',
      height: '125px',
      paddingRight: '70px'
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
      marginLeft: '5%',
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

      <h1 className="hide-on-small" style={styleNavbarLine}> | </h1>

      <span className="hide-on-small">
        <FlatButton
          label="Login"
          labelStyle={styleFlatButtonLabel}
          style={styleFlatButton}
        />
      </span>

      <span className="hide-on-small">
        <FlatButton
          className="hide-on-small"
          label="Sign Up"
          style={styleFlatButtonAlt}
          labelStyle={styleFlatButtonLabelAlt}
        />
      </span>
    </AppBar>
  }
});

export default WelcomeNav;
