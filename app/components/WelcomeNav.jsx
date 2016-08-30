import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavLogo from 'components/NavLogo';
import React from 'react';
import { withRouter } from 'react-router';

const WelcomeNav = React.createClass({
  handleTouchTap() {
    this.props.router.push('/auth');
  },

  render() {
    const styles = {
      appBar: {
        boxShadow: 'none',
        height: '125px',
        paddingRight: '70px'
      },
      flatButton: {
        height: '125px',
        lineHeight: '125px',
        width: '108px'
      },
      flatButtonAlt: {
        height: '125px',
        lineHeight: '125px',
        minWidth: '60px'
      },
      flatButtonLabel: {
        fontFamily: 'MontserratLight',
        fontSize: '1.2rem',
        letterSpacing: '0.12rem',
        padding: '0'
      },
      flatButtonLabelAlt: {
        border: '3px solid white',
        fontFamily: 'MontserratLight',
        fontSize: '1.4rem',
        letterSpacing: '0.12rem',
        margin: '0 10px',
        padding: '8px'
      },
      iconLeft: {
        height: '125px',
        lineHeight: '125px',
        marginLeft: '5%',
        marginTop: '20px'
      },
      navbarLine: {
        color: 'white',
        fontFamily: 'MontserratHairline',
        fontSize: '2rem',
        marginLeft: '18px',
        marginRight: '5px',
        paddingTop: '30px'
      },
      subTitle: {
        fontFamily: 'MontserratHairline',
        fontSize: '1.7rem',
        marginLeft: '10px',
        position: 'relative',
        top: '-2px'
      },
      title: {
        cursor: 'pointer',
        fontFamily: 'MontserratHairline',
        fontSize: '1.2rem',
        height: '125px',
        letterSpacing: '0.12rem',
        lineHeight: '71px',
        marginTop: '20px'
      }
    };

    return <div>
      <AppBar
        iconElementLeft={<NavLogo />}
        iconStyleLeft={styles.iconLeft}
        style={styles.appBar}
        title={
          <h1>workflow <span className="hairline-font">|</span>
            <span style={styles.subTitle}>Job Search Management</span>
          </h1>
        }
        titleStyle={styles.title}
      >
        <h1 className="hide-on-small" style={styles.navbarLine}> | </h1>
        <span className="hide-on-small">
          <FlatButton
            label="Login"
            labelStyle={styles.flatButtonLabel}
            onTouchTap={this.handleTouchTap}
            style={styles.flatButton}
          />
        </span>
        <span className="hide-on-small">
          <FlatButton
            className="hide-on-small"
            label="Sign Up"
            labelStyle={styles.flatButtonLabelAlt}
            onTouchTap={this.handleTouchTap}
            style={styles.flatButtonAlt}
          />
        </span>
      </AppBar>
      {this.props.children}
    </div>;
  }
});

export default withRouter(WelcomeNav);
