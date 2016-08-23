import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavLogo from 'components/NavLogo';
import React from 'react';
import { withRouter } from 'react-router';

const MainNav = React.createClass({
  handleTouchTap(event) {
    const path = '/' + event.target.textContent.toLowerCase();
    this.props.router.push(path);
  },

  render() {
    const styleAppBar = {
      height: '125px',
      paddingRight: '70px'
    };

    const styleFlatButton = {
      height: '125px',
      lineHeight: '125px',
      minWidth: '60px'
    };

    const styleFlatButtonLabel = {
      fontFamily: 'MontserratHairline',
      fontSize: '1.2rem',
      letterSpacing: '0.12rem',
      padding: '0'
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

    const styleSubTitle = {
      fontSize: '1.7rem',
      marginLeft: '10px',
      position: 'relative',
      top: '-2px'
    };

    const styleTitle = {
      cursor: 'pointer',
      fontFamily: 'MontserratHairline',
      fontSize: '1.2rem',
      height: '125px',
      letterSpacing: '0.12rem',
      lineHeight: '71px',
      marginTop: '20px'
    };


    return <div><AppBar
      iconElementLeft={<NavLogo />}
      iconStyleLeft={styleIconLeft}
      style={styleAppBar}
      title={<h1>workflow |
        <span style={styleSubTitle}>Job Search Management</span>
      </h1>}
        titleStyle={styleTitle}
      >
      <FlatButton
        label="Dashboard"
        labelStyle={styleFlatButtonLabel}
        style={styleFlatButton}
        onTouchTap={this.handleTouchTap}
      />
      <FlatButton
        label="Jobs"
        labelStyle={styleFlatButtonLabel}
        style={styleFlatButton}
        onTouchTap={this.handleTouchTap}
      />
      <FlatButton
        label="Contacts"
        labelStyle={styleFlatButtonLabel}
        style={styleFlatButton}
        onTouchTap={this.handleTouchTap}
      />

      <h1 style={styleNavbarLine}> | </h1>

      <FlatButton
        label="Logout"
        labelStyle={styleFlatButtonLabel}
        style={styleFlatButton}
      />
    </AppBar>{this.props.children}</div>;
  }
});

export default withRouter(MainNav);
