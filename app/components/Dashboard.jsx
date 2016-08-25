import DashboardJob from 'components/DashboardJob';
import DashboardSideBar from 'components/DashboardSideBar';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Jobs = React.createClass({
  render() {
    return <main>
      <Row>
        <DashboardSideBar />
        <DashboardJob saveJob={this.props.saveJob} jobs={this.props.jobs} />
      </Row>
    </main>
  }
});

export default Jobs;
