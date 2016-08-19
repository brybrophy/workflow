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
      marginLeft: '35px'
    };

    return <div>
      <AppBar
        style={styleAppBar}
        title="workflow | Job Search Management"
        iconElementLeft={<NavLogo/>}
        iconStyleLeft={styleIconLeft}
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
