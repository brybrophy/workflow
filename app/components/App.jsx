import axios from 'axios';
import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';


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
      <MainNav />
      {React.cloneElement(this.props.children, {
        jobs: this.state.jobs
      })}
      <Footer />
    </div>
  }
});

export default App;
