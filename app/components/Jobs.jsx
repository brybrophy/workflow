import JobsSideBar from 'components/JobsSideBar';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Jobs = React.createClass({
  render() {
    return <main>
      <Row>
        <Col md={3}>
          <JobsSideBar />
        </Col>
      </Row>
    </main>
  }
});

export default Jobs;
