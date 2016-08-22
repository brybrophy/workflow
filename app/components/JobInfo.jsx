import JobForm from 'components/JobForm';
import JobMap from 'components/JobMap';
import JobSubNav from 'components/JobSubNav';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const JobInfo = React.createClass({
  render() {
    return <Grid style={{ margin: '30px auto', maxWidth: '960px'}}>
      <Row>
        <Col xs={12} sm={7}>
          <JobForm job={this.props.job} />
        </Col>
        <Col xs={12} sm={4} smOffset={1}>
          <JobMap />
        </Col>
      </Row>
    </Grid>;
  }
});

export default JobInfo;
