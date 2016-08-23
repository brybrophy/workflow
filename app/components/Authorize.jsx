import Login from 'components/Login';
import SignUp from 'components/SignUp';
import React from 'react';

const Authorize = React.createClass({
  getInitialState() {
    return {
      login: true
    }
  },

  toggleLoginState() {
    if (this.state.login) {
      return setTimeout(() => { this.setState({ login: false }); }, 200);
    }

    setTimeout(() => { this.setState({ login: true }); }, 200);
  },

  render() {
    const stylePipesLeft = {
      height: '500px',
      position: 'relative',
      top: '200px',
      width: 'auto'
    };

    const stylePipesRight = {
      bottom: '400px',
      height: '385px',
      left: '59vw',
      position: 'relative',
      width: 'auto'
    };

    const stylePage = {
      alignContent: 'stretch',
      alignItems: 'center',
      backgroundColor: '#F9F8F7',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      height: '100vh'
    };

    return <main style={stylePage}>
      <img style={stylePipesLeft} src="images/pipes_left.svg" />
      {
        this.state.login
        ?
        <Login toggleLoginState={this.toggleLoginState}/>
        :
        <SignUp toggleLoginState={this.toggleLoginState}/>
      }
      <img style={stylePipesRight} src="images/pipes_right.svg" />
    </main>
  }
});

export default Authorize;
