import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

const Dashboard = React.createClass({
  render() {
    return <div>
      <Grid>
        <Row>
          <Col xs={1}>
            <a href="#">
              <img src="images/back_arrow.svg" />
            </a>
          </Col>

          <Col xs={1}>
            <a href="#">
              <img src="images/forward_arrow.svg" />
            </a>
          </Col>
        </Row>
      </Grid>
    </div>
  }
});

export default Dashboard;
