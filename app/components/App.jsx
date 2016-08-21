import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';
import WelcomeInfo from 'components/WelcomeInfo';
import WelcomeHero from 'components/WelcomeHero';
import WelcomeNav from 'components/WelcomeNav';


const App = React.createClass({
  render() {
    return <div>
      <WelcomeNav />
      <WelcomeHero />
      <WelcomeInfo />
      <Footer />
    </div>
  }
});

export default App;
