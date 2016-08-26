import FlatButton from 'material-ui/FlatButton';
import FooterLogo from 'components/FooterLogo';
import GithubLogo from 'components/GithubLogo';
import React from 'react';
import TwitterLogo from 'components/TwitterLogo';

const Footer = React.createClass({
  render() {
    const styleFooter = {
      backgroundColor: 'black',
      bottom: '0',
      display: 'flex',
      height: '120px',
      position: 'absolute',
      width: '100vw'
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

    const styleFooterLogo = {
      marginLeft: '50px',
      marginTop: '25px'
    };

    const stylePullRight = {
      position: 'absolute',
      right: '50px'
    };

    const styleTextBottom = {
      color: 'white',
      cursor: 'pointer',
      fontFamily: 'MontserratHairline',
      fontSize: '1.1rem',
      letterSpacing: '0.12rem',
      marginLeft: '10px',
      marginTop: '70px'
    };

    return <footer style={styleFooter}>

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
  }
});

export default Footer;
