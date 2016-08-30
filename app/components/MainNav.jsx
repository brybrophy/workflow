import AppBar from 'material-ui/AppBar';
import Cookie from 'react-cookie';
import FlatButton from 'material-ui/FlatButton';
import NavLogo from 'components/NavLogo';
import React from 'react';
import { withRouter } from 'react-router';

const MainNav = React.createClass({
  handleTouchTap(event) {
    if (event.currentTarget.textContent === 'Logout') {
      Cookie.remove('loggedIn');
      Cookie.remove('userId');
      Cookie.remove('token', { path: '/' });

      return this.props.router.push('/');
    }

    if (event.currentTarget.textContent.includes('workflow')) {
      return this.props.router.push('/');
    }

    const path = `/${event.currentTarget.textContent.toLowerCase()}`;

    this.props.router.push(path);
  },

  render() {
    const styles = {
      appBar: {
        height: '125px',
        paddingRight: '70px'
      },
      flatButton: {
        height: '125px',
        lineHeight: '125px',
        width: '108px'
      },
      flatButtonLabel: {
        fontFamily: 'MontserratHairline',
        fontSize: '1.2rem',
        letterSpacing: '0.12rem',
        padding: '0'
      },
      iconLeft: {
        height: '125px',
        lineHeight: '125px',
        marginLeft: '35px',
        marginTop: '20px'
      },
      navbarLine: {
        color: 'white',
        fontFamily: 'MontserratHairline',
        fontSize: '2rem',
        marginLeft: '8px',
        marginRight: '5px',
        paddingTop: '30px'
      },
      subTitle: {
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
        onTitleTouchTap={this.handleTouchTap}
        style={styles.appBar}
        title={
          <h1>workflow |
            <span style={styles.subTitle}>Job Search Management</span>
          </h1>
        }
        titleStyle={styles.title}
      >
        <FlatButton
          label="Dashboard"
          labelStyle={styles.flatButtonLabel}
          onTouchTap={this.handleTouchTap}
          style={styles.flatButton}
        />
        <FlatButton
          label="Contacts"
          labelStyle={styles.flatButtonLabel}
          onTouchTap={this.handleTouchTap}
          style={styles.flatButton}
        />
        <h1 style={styles.navbarLine}> | </h1>
        <FlatButton
          label="Logout"
          labelStyle={styles.flatButtonLabel}
          onTouchTap={this.handleTouchTap}
          style={styles.flatButton}
        />
      </AppBar>{this.props.children}
    </div>;
  }
});

export default withRouter(MainNav);
