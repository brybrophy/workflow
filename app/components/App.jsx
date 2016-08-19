import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavLogo from 'components/NavLogo';
import React from 'react';

const App = React.createClass({
  render() {

    const styleAppBar = {
      height: '125px'
    };

    const styleFlatButton = {
      height: '125px',
      lineHeight: '125px',
      minWidth: '60px'
    };

    const styleFlatButtonLabel = {
      fontSize: '.7rem',
      padding: '0'
    };

    const styleIconLeft = {
      height: '125px',
      lineHeight: '125px',
      marginLeft: '35px',
      marginTop: '14px'
    };

    const styleSubTitle = {
      fontSize: '.9rem',
      marginLeft: '10px',
      position: 'relative',
      top: '-5px'
    };

    const styleTitle = {
      cursor: 'pointer',
      fontSize: '1.1rem',
      height: '125px',
      lineHeight: '71px'
    };

    return <div>
      <AppBar
        iconElementLeft={<NavLogo/>}
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
        />
        <FlatButton
          label="Jobs"
          labelStyle={styleFlatButtonLabel}
          style={styleFlatButton}
        />
        <FlatButton
          label="Contacts"
          labelStyle={styleFlatButtonLabel}
          style={styleFlatButton}
        />
        <FlatButton
          label="Logout"
          labelStyle={styleFlatButtonLabel}
          style={styleFlatButton}
        />
      </AppBar>
    </div>
  }
});

export default App;
