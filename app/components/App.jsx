import axios from 'axios';
import Footer from 'components/Footer';
import Jobs from 'components/Jobs';
import MainNav from 'components/MainNav';
import React from 'react';
import WelcomeInfo from 'components/WelcomeInfo';
import WelcomeHero from 'components/WelcomeHero';
import WelcomeNav from 'components/WelcomeNav';


const App = React.createClass({
  getInitialState() {
    return {
      jobs: []
    }
  },

  componentWillMount() {
    axios.get('/api/jobs')
      .then((res) => {
        this.setState({ jobs: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    return <div>
      <WelcomeNav />
      {/* <WelcomeHero />
      <WelcomeInfo /> */}
      <Jobs jobs={this.state.jobs} />
      <Footer />
    </div>
  }
});

export default App;
