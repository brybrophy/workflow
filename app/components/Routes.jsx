import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from 'components/App';
import ContactForm from 'components/ContactForm';
import JobInfo from 'components/JobInfo';
import JobNotes from 'components/JobNotes';
import JobProgress from 'components/JobProgress';
import Jobs from 'components/Jobs';
import JobSubNav from 'components/JobSubNav';
import React from 'react';
import WelcomeHero from 'components/WelcomeHero';
import WelcomeInfo from 'components/WelcomeInfo';
import WelcomeNav from 'components/WelcomeNav';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={WelcomeNav} path="/home">
        <IndexRoute component={WelcomeHero} />
        <Route component={WelcomeInfo} />
      </Route>
      <Route component={App} path="/">
        <Route component={JobSubNav} path="/job">
          <IndexRoute component={JobInfo} />
          <Route component={ContactForm} path="contacts" />
          <Route component={JobProgress} path="progress" />
          <Route component={JobNotes} path="notes" />
        </Route>
        {/* <Route component={Login} path="/login" /> */}
        {/* <Route component={Signup} path="/signup" /> */}
        {/* <Route component={Dashboard} path="/dashboard" /> */}
        <Route component={Jobs} path="jobs" />
        {/* <Route component={Contacts} path="contacts" /> */}
        {/* <Route component={NotFound} path="*" /> */}
      </Route>
    </Router>;
  }
});

export default Routes;
