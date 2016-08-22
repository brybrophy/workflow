import Footer from 'components/Footer';
import React from 'react';
import WelcomeHero from 'components/WelcomeHero';
import WelcomeNav from 'components/WelcomeNav';
import WelcomeInfo from 'components/WelcomeInfo';

const Welcome = React.createClass({
  render() {
    return <main>
      <WelcomeNav />
      <WelcomeHero />
      <WelcomeInfo />
      <Footer />
    </main>
  }
});

export default Welcome;
