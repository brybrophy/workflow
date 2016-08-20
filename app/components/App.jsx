import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FooterLogo from 'components/FooterLogo';
import GithubLogo from 'components/GithubLogo';
import NavLogo from 'components/NavLogo';
import React from 'react';
import TwitterLogo from 'components/TwitterLogo';

const App = React.createClass({
  render() {

    const styleAppBar = {
      height: '125px',
      paddingRight: '70px'
    };

    const styleFooter = {
      backgroundColor: 'black',
      display: 'flex',
      height: '120px',
      width: '100vw'
    };

    const styleFlatButton = {
      height: '125px',
      lineHeight: '125px',
      minWidth: '60px'
    };

    const styleFlatButtonBottom = {
      height: '120px',
      lineHeight: '120px',
      padding: '20px 0 0'
    };

    const styleFlatButtonLabel = {
      fontFamily: 'MontserratHairline',
      fontSize: '1.2rem',
      padding: '0'
    };

    const styleIconLeft = {
      height: '125px',
      lineHeight: '125px',
      marginLeft: '35px',
      marginTop: '20px'
    };

    const styleFooterLogo = {
      marginLeft: '50px',
      marginTop: '25px'
    };

    const styleNavbarLine = {
      color: 'white',
      fontSize: '2rem',
      marginLeft: '18px',
      marginRight: '10px',
      paddingTop: '30px'
    };

    const stylePullRight = {
      position: 'absolute',
      right: '50px'
    };

    const styleSubTitle = {
      fontSize: '1.3rem',
      marginLeft: '10px',
      position: 'relative',
      top: '-5px'
    };

    const styleTitle = {
      cursor: 'pointer',
      fontSize: '1.2rem',
      height: '125px',
      lineHeight: '71px',
      marginTop: '20px'
    };

    const styleTextBottom = {
      color: 'white',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginLeft: '10px',
      marginTop: '70px'
    };

    return <div>
      <AppBar
        iconElementLeft={<NavLogo/>}
        iconStyleLeft={styleIconLeft}
        style={styleAppBar}
        title={<h1 className="hairline-font space-letters">workflow |
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
        <h1 className="hairline-font space-letters" style={styleNavbarLine}>
          |
        </h1>
        <FlatButton
          label="Logout"
          labelStyle={styleFlatButtonLabel}
          style={styleFlatButton}
        />
      </AppBar>

      <footer style={styleFooter}>

        <div style={styleFooterLogo}>
          <FooterLogo />
        </div>

        <p className="hairline-font space-letters" style={styleTextBottom}>
          workflow © 2016-2017
        </p>

        <div style={stylePullRight}>
          <FlatButton
            label={<GithubLogo />}
            style={styleFlatButtonBottom}
          />
          <FlatButton
            label={<TwitterLogo />}
            style={styleFlatButtonBottom}
          />
        </div>
      </footer>
    </div>
  }
});

export default App;
