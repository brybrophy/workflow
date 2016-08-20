import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';
import WelcomeNav from 'components/WelcomeNav';


const App = React.createClass({
  render() {
    return <div>
      <WelcomeNav />

      <Footer />
    </div>
  }
});

export default App;
