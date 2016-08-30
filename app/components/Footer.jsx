import FlatButton from 'material-ui/FlatButton';
import FooterLogo from 'components/FooterLogo';
import GithubLogo from 'components/GithubLogo';
import React from 'react';
import TwitterLogo from 'components/TwitterLogo';

const Footer = React.createClass({
  handleTouchTap(event) {
    if (event.currentTarget.id === 'gitHub') {
      window.location.href = 'https://github.com/brybrophy/workflow';
    }

    else if (event.currentTarget.id === 'twitter') {
      window.location.href = 'https://twitter.com/jakebrbell';
    }

    else if (event.target.id === 'logo') {
      window.location.href = '/home';
    }
  },

  render() {
    const styles = {
      flatButtonBottom: {
        height: '120px',
        lineHeight: '120px',
        padding: '20px 0 0'
      },
      footer: {
        backgroundColor: 'black',
        display: 'flex',
        height: '120px',
        width: '100vw'
      },
      footerLogo: {
        marginLeft: '50px',
        marginTop: '25px'
      },
      pullRight: {
        position: 'absolute',
        right: '50px'
      },
      textBottom: {
        color: 'white',
        cursor: 'pointer',
        fontFamily: 'MontserratHairline',
        fontSize: '1.1rem',
        letterSpacing: '0.12rem',
        marginLeft: '10px',
        marginTop: '70px'
      }
    };

    return <footer style={styles.footer}>
      <div style={styles.footerLogo}>
        <FooterLogo />
      </div>

      <p
        id="logo"
        onTouchTap={this.handleTouchTap}
        style={styles.textBottom}
      >
        workflow © 2016-2017
      </p>

      <div style={styles.pullRight}>
        <FlatButton
          id="gitHub"
          label={<GithubLogo />}
          onTouchTap={this.handleTouchTap}
          style={styles.flatButtonBottom}
        />
        <FlatButton
          id="twitter"
          label={<TwitterLogo />}
          onTouchTap={this.handleTouchTap}
          style={styles.flatButtonBottom}
        />
      </div>
    </footer>;
  }
});

export default Footer;
