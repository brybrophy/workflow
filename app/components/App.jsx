import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';

const App = React.createClass({
  getInitialState() {
    return {
      contacts: [],
      cookies: {},
      jobs: [],
      snackbar: {
        message: '',
        open: false
      }
    };
  },

  componentWillMount() {
    this.setCookies()

    axios.get(`/api/jobs/${window.COOKIES.userId}/users`)
      .then((res) => {
        this.setState({ cookies: window.COOKIES, jobs: res.data });
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Unable to load jobs information',
          open: true
        };

        this.showSnackbar(nextSnackbar);
      });

    axios.get(`api/contacts/${window.COOKIES.userId}`)
      .then((res) => {
        this.setState({ contacts: res.data });
    })
    .catch((err) => {
      const nextSnackbar = {
        message: 'Unable to load contacts information',
        open: true
      }
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

  setCookies() {
    window.COOKIES = {};
    document.cookie.split('; ').forEach(function(prop) {
      var propKey = prop.split('=')[0];
      var propValue = prop.split('=')[1];

      window.COOKIES[propKey] = propValue;

    });
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
        contacts: this.state.contacts,
        cookies: this.state.cookies,
        jobs: this.state.jobs,
        saveJob: this.saveJob,
        showSnackbar: this.showSnackbar
      })}
      <Footer />
    </div>;
  }
});

export default App;
