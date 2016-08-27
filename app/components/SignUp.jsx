import axios from 'axios';
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
    const styleBox = {
      backgroundColor: 'white',
      border: '1px solid #D1CFC8',
      borderRadius: '3px',
      height: '445px',
      position: 'relative',
      right: '50px',
      top: '165px',
      width: '35vw'
    };

    const styleButtonHeader ={
      color: '#A6A399',
      fontFamily: 'MontserratLight',
      textAlign: 'center',
      marginTop: '20%'
    };

    const styleFlatButton1 = {
      backgroundColor: '#E7E4DB',
      borderRadius: '3px 0 0 0',
      borderBottom: '1px solid #D1CFC8',
      borderRight: '1px solid #D1CFC8',
      fontFamily: 'MontserratLight',
      height: '60px',
      width: '50%'
    };

    const styleFlatButton2 = {
      backgroundColor: 'white',
      borderRadius: '0 3px 0 0',
      fontFamily: 'MontserratLight',
      height: '60px',
      width: '50%'
    };

    const styleFlatButtonAlt = {
      backgroundColor: '#E7E4DB',
      borderRadius: '3px',
      fontFamily: 'MontserratLight',
      height: '70px',
      margin: '10px 23% 15% 23%',
      paddingTop: '15px',
      postiton: 'relative',
      width: '55%'
    };

    const styleFlatButtonLabel = {
      color: '#A6A399',
      fontFamily: 'MontserratLight',
      fontSize: '1.4rem',
      letterSpacing: '0.12rem',
    };

    const styleFlatButtonLabelAlt = {
      color: '#A6A399',
      fontFamily: 'MontserratLight',
      fontSize: '1.4rem',
      letterSpacing: '0.12rem',
      position: 'relative',
      bottom: '13px'
    };

    const styleSmallText = {
      color: '#A6A399',
      fontFamily: 'MontserratLight',
      fontSize: '1.1rem',
      textAlign: 'center'
    };

    return <div style={styleBox}>
      <FlatButton
        label="login"
        labelStyle={styleFlatButtonLabel}
        onTouchTap={this.handleTouchTap}
        style={styleFlatButton1}
      />

      <FlatButton
        label="sign up"
        labelStyle={styleFlatButtonLabel}
        style={styleFlatButton2}
      />

      <h4 style={styleButtonHeader}>SIGN UP WITH</h4>

      <FlatButton
        label="linkedIn"
        labelStyle={styleFlatButtonLabelAlt}
        onTouchTap={this.handleSignUp}
        icon={<LinkedInLogo />}
        style={styleFlatButtonAlt}
      />

      <div style={styleSmallText}>
        <small>
          You must have a linked in account to use this application.<br />
          If you do not, click the link above or go
          {' '}
          <a href="http://www.linkedin.com">
          Here.
          </a>
        </small>
      </div>
    </div>
  }
});

export default SignUp;
