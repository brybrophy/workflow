import Footer from 'components/Footer';
import Jobs from 'components/Jobs';
import MainNav from 'components/MainNav';
import React from 'react';
import WelcomeInfo from 'components/WelcomeInfo';
import WelcomeHero from 'components/WelcomeHero';
import WelcomeNav from 'components/WelcomeNav';


const App = React.createClass({
  render() {
    return <div>
      <WelcomeNav />
      {/* <WelcomeHero />
      <WelcomeInfo /> */}
      <Jobs />
      <Footer />
    </div>
  }
});

export default App;
