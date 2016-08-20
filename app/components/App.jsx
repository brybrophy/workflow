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
      height: '125px'
    };

    const styleAppBarBottom = {
      backgroundColor: 'black',
      display: 'flex',
      height: '120px',
      width: '100%'
    };

    const styleFlatButton = {
      height: '125px',
      lineHeight: '125px',
      minWidth: '60px'
    };

    const styleFlatButtonBottom = {
      height: '100px',
      lineHeight: '100px',
      padding: '20px 0 0',
      width: '90px'
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

    const styleIconLeftBottom = {
      marginLeft: '35px',
      marginTop: '25px'
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

    const styleTextBottom = {
      color: 'white',
      cursor: 'pointer',
      fontSize: '1.1rem',
      marginLeft: '15px',
      marginTop: '60px'
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
        <FlatButton
          label="Logout"
          labelStyle={styleFlatButtonLabel}
          style={styleFlatButton}
        />
      </AppBar>

      <main>Test</main>
      <div className="flex-container">
      <footer

        style={styleAppBarBottom}
        title={<p className="hairline-font space-letters">workflow © 2016-2017</p>}
        iconElementLeft={<FooterLogo/>}
      >
      <FooterLogo style={styleIconLeftBottom} />

      <p className="hairline-font space-letters" style={styleTextBottom}>
        workflow © 2016-2017
      </p>

        <FlatButton
          label={<GithubLogo />}
          style={styleFlatButtonBottom}
        />
        <FlatButton
          label={<TwitterLogo />}
          style={styleFlatButtonBottom}
        />
      </footer>
      </div>
    </div>
  }
});

export default App;
