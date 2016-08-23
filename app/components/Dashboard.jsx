import DashboardGroup from 'components/DashboardGroup';
import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

const Dashboard = React.createClass({
  render() {
    return <Row style={{marginBottom: '205px', paddingLeft: '15%'}}>
        <DashboardGroup jobs={this.props.jobs}/>
      </Row>
  }
});

export default Dashboard;
