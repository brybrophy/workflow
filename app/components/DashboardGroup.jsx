import React from 'react';
import Timestamp from 'react-timestamp';
import weakKey from 'weak-key';
import { Col, Grid, Row } from 'react-bootstrap';

const DashboardGroup = React.createClass({
  render() {
    const { jobs } = this.props;

    const informational = [];
    const phone = [];
    const onSite = [];

    for (const job of jobs) {
      if (job.interviewApplied) {
        informational.push(job);
      }

      if (job.interviewPhone) {
        phone.push(job);
      }

      if (job.interviewOnsite) {
        onSite.push(job);
      }
     }

     const styleColumn = {
       marginTop: '20px',
       padding: '5px 0'
     };

     const styleJob = {
       backgroundColor: '#E7E4DB',
       borderRadius: '5px',
       boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
       marginTop: '30px',
       padding: '5px 0'
     };

    return <Col xs={10}>
      <Row style={{color: '#A6A399', textAlign: 'center'}}>
        <Col xs={12} md={3}>
          <div style={styleColumn}>
            <h3>INFORMATIONAL</h3>

            {informational.map((job) => {
              return <div style={styleJob} key={weakKey(job)}>
                <h5>{job.companyName}</h5>
                <h5>{job.title}</h5>
                <p>
                  <Timestamp format="full" time={job.interviewApplied} />
                </p>
              </div>
            })}

          </div>
        </Col>

        <Col xs={12} md={3}>
          <div style={styleColumn}>
            <h3>PHONE</h3>

            {informational.map((job) => {
              return <div style={styleJob} key={weakKey(job)}>
                <h5>{job.companyName}</h5>
                <h5>{job.title}</h5>
                <p>
                  <Timestamp format="full" time={job.interviewApplied} />
                </p>
              </div>
            })}
          </div>
        </Col>

        <Col xs={12} md={3}>
          <div style={styleColumn}>
            <h3>ON SITE</h3>

            {informational.map((job) => {
              return <div style={styleJob} key={weakKey(job)}>
                <h5>{job.companyName}</h5>
                <h5>{job.title}</h5>
                <p>
                  <Timestamp format="full" time={job.interviewApplied} />
                </p>
              </div>
            })}
          </div>
        </Col>

        <Col xs={12} md={3}>
          <div style={styleColumn}>
            <h3>TECHNICAL</h3>

            {informational.map((job) => {
              return <div style={styleJob} key={weakKey(job)}>
                <h5>{job.companyName}</h5>
                <h5>{job.title}</h5>
                <p>
                  <Timestamp format="full" time={job.interviewApplied} />
                </p>
              </div>
            })}
          </div>
        </Col>
      </Row>
    </Col>
  }
});

export default DashboardGroup;
