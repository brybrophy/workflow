import { browserHistory, IndexRoute, Redirect, Route, Router } from 'react-router';
import App from 'components/App';
import Authorize from 'components/Authorize';
import ContactForm from 'components/ContactForm';
import Dashboard from 'components/Dashboard';
import JobInfo from 'components/JobInfo';
import JobNotes from 'components/JobNotes';
import JobProgress from 'components/JobProgress';
import Jobs from 'components/Jobs';
import JobSubNav from 'components/JobSubNav';
import React from 'react';
import Welcome from 'components/Welcome';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={Welcome} path="/home" />
      <Redirect from="/" to="/home" />
      <Route component={Authorize} path="/auth" />
      <Route component={App} path="/">
        <Route component={JobSubNav} path="/job/:id">
          <IndexRoute component={JobInfo} />
          <Route component={ContactForm} path="contacts" />
          <Route component={JobProgress} path="progress" />
          <Route component={JobNotes} path="notes" />
        </Route>
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Jobs} path="jobs" />
        {/* <Route component={Contacts} path="contacts" /> */}
        {/* <Route component={NotFound} path="*" /> */}
      </Route>
    </Router>;
  }
});

export default Routes;
