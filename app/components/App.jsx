import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';

const App = React.createClass({
  getInitialState() {
    return {
      jobs: [],

      snackbar: {
        message: '',
        open: false
      }
    };
  },

  componentWillMount() {
    axios.get('/api/jobs')
      .then((res) => {
        this.setState({ jobs: res.data });
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Unable to load jobs information',
          open: true
        };

        this.showSnackbar(nextSnackbar);
      });
  },

  handleRequestCloseSnackbar() {
    const nextSnackbar = { message: '', open: false };

    this.setState({ snackbar: nextSnackbar });
  },

  addNewJob(newJob) {
    const nextJobs = this.state.jobs.concat(newJob);

    this.setState({ jobs: nextJobs });
  },

  saveJob(nextJob) {
    const nextJobs = this.state.jobs.map((element) => {
      if (element.id !== nextJob.id) {
        return element;
      }

      return nextJob;
    });

    this.setState({ jobs: nextJobs });
  },

  showSnackbar(nextSnackbar) {
    this.setState({ snackbar: nextSnackbar });
  },

  render() {
    return <div>
      <Snackbar
        autoHideDuration={3000}
        message={this.state.snackbar.message}
        onRequestClose={this.handleRequestCloseSnackbar}
        open={this.state.snackbar.open}
      />
      <MainNav />
      {React.cloneElement(this.props.children, {
        addNewjob: this.addNewJob,
        jobs: this.state.jobs,
        saveJob: this.saveJob,
        showSnackbar: this.showSnackbar
      })}
      <Footer />
    </div>;
  }
});

export default App;
