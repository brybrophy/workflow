import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

const Dashboard = React.createClass({
  render() {
    return <div>
      <Grid>
        <Row>
          <Col xs={1}>Hello</Col>
        </Row>
      </Grid>
    </div>
  }
});

export default Dashboard;
