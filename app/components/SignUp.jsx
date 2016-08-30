import FlatButton from 'material-ui/FlatButton';
import LinkedInLogo from 'components/LinkedInLogo';
import React from 'react';

const SignUp = React.createClass({
  handleSignUp() {
    window.location.href = '/api/users/oauth/linkedin';
  },

  handleTouchTap() {
    this.props.toggleLoginState();
  },

  render() {
    const styles = {
      box: {
        backgroundColor: 'white',
        border: '1px solid #D1CFC8',
        borderRadius: '3px',
        height: '445px',
        position: 'relative',
        right: '50px',
        top: '165px',
        width: '35vw'
      },
      buttonHeader: {
        color: '#A6A399',
        fontFamily: 'MontserratLight',
        textAlign: 'center',
        marginTop: '20%'
      },
      flatButton1: {
        backgroundColor: '#327F9E',
        borderRadius: '3px 0 0 0',
        borderBottom: '1px solid #D1CFC8',
        borderRight: '1px solid #D1CFC8',
        fontFamily: 'MontserratLight',
        height: '60px',
        width: '50%',
        zIndex: '1000'
      },
      flatButton2: {
        backgroundColor: 'white',
        borderRadius: '0 3px 0 0',
        fontFamily: 'MontserratLight',
        height: '60px',
        width: '50%',
        zIndex: '1000'
      },
      flatButtonAlt: {
        backgroundColor: '#327F9E',
        borderRadius: '3px',
        fontFamily: 'MontserratLight',
        height: '70px',
        margin: '10px 23% 15% 23%',
        paddingTop: '15px',
        postiton: 'relative',
        width: '55%',
        zIndex: '1000'
      },
      flatButtonLabel1: {
        color: '#FFF',
        fontFamily: 'MontserratLight',
        fontSize: '1.4rem',
        letterSpacing: '0.12rem'
      },
      flatButtonLabel2: {
        color: '#A6A399',
        fontFamily: 'MontserratLight',
        fontSize: '1.4rem',
        letterSpacing: '0.12rem'
      },
      flatButtonLabelAlt: {
        color: '#FFF',
        fontFamily: 'MontserratLight',
        fontSize: '1.4rem',
        letterSpacing: '0.12rem',
        position: 'relative',
        bottom: '13px'
      },
      smallText: {
        color: '#A6A399',
        fontFamily: 'MontserratLight',
        fontSize: '1.3rem',
        textAlign: 'center'
      }
    };

    return <div style={styles.box}>
      <FlatButton
        label="Login"
        labelStyle={styles.flatButtonLabel1}
        onTouchTap={this.handleTouchTap}
        style={styles.flatButton1}
      />

      <FlatButton
        label="Sign Up"
        labelStyle={styles.flatButtonLabel2}
        style={styles.flatButton2}
      />

      <h4 style={styles.buttonHeader}>SIGN UP WITH</h4>

      <FlatButton
        icon={<LinkedInLogo />}
        label="LinkedIn"
        labelStyle={styles.flatButtonLabelAlt}
        onTouchTap={this.handleSignUp}
        style={styles.flatButtonAlt}
      />

      <div style={styles.smallText}>
        <small>
          You must have a LinkedIn account to use this application.<br />
          If you do not, click the link above or go
          {' '}
          <a href="http://www.linkedin.com">
          Here.
          </a>
        </small>
      </div>
    </div>;
  }
});

export default SignUp;
