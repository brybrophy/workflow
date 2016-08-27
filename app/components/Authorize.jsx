import Login from 'components/Login';
import React from 'react';
import SignUp from 'components/SignUp';

const Authorize = React.createClass({
  getInitialState() {
    return {
      login: true
    };
  },

  toggleLoginState() {
    if (this.state.login) {
      return setTimeout(() => { this.setState({ login: false }); }, 100);
    }

    setTimeout(() => { this.setState({ login: true }); }, 100);
  },

  render() {
    const styles = {
      page: {
        alignContent: 'stretch',
        alignItems: 'center',
        backgroundColor: '#F9F8F7',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100vh',
        justifyContent: 'flex-start'
      },
      pipesLeft: {
        height: '500px',
        position: 'relative',
        top: '200px',
        width: 'auto'
      },
      pipesRight: {
        bottom: '400px',
        height: '385px',
        left: '59vw',
        position: 'relative',
        width: 'auto'
      }
    };

    return <main style={styles.page}>
      <img src="images/pipes_left.svg" style={styles.pipesLeft} />
      {
        this.state.login
        ? // eslint-disable-line operator-linebreak
          <Login toggleLoginState={this.toggleLoginState} />
        : // eslint-disable-line operator-linebreak
          <SignUp toggleLoginState={this.toggleLoginState} />
      }
      <img src="images/pipes_right.svg" style={styles.pipesRight} />
    </main>;
  }
});

export default Authorize;
