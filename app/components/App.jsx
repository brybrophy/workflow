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

  saveJob(nextJob) {
    const nextJobs = this.state.jobs.map((job) => {
      if (job.id !== nextJob.id) {
        return job;
      }

      return nextJob;
    });

    this.setState({ jobs: nextJobs });
  },

  render() {
    return <div>
      <MainNav />
      {React.cloneElement(this.props.children, {
        jobs: this.state.jobs,
        saveJob: this.saveJob
      })}
      <Footer />
    </div>
  }
});

export default App;
