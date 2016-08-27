import { Redirect, Route, Router, browserHistory }
  from 'react-router';
import App from 'components/App';
import Authorize from 'components/Authorize';
import Dashboard from 'components/Dashboard';
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
        <Route component={JobSubNav} path="/new/job" />
        <Route component={Dashboard} path="/dashboard" />
        {/* <Route component={Contacts} path="contacts" /> */}
        {/* <Route component={NotFound} path="*" /> */}
      </Route>
    </Router>;
  }
});

export default Routes;
