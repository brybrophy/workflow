import DashboardJob from 'components/DashboardJob';
import DashboardSideBar from 'components/DashboardSideBar';
import React from 'react';
import { Row } from 'react-bootstrap';

const Dashboard = React.createClass({
  render() {
    return <main>
      <Row>
        <DashboardSideBar />
        <DashboardJob
          jobs={this.props.jobs}
          saveJob={this.props.saveJob}
          showSnackbar={this.props.showSnackbar}
        />
      </Row>
    </main>;
  }
});

export default Dashboard;
