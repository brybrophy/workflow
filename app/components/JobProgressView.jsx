import { Col, Grid, Row } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import JobProgress from 'components/JobProgress';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobProgressView = React.createClass({
  render() {
    const { job } = this.props;
    const progressPoints = {};

    const styleColumn = {
      padding: '0 3px'
    };

    const styleFlatButton = {
      borderRadius: '3px',
      fontFamily: 'MontserratHairline',
      margin: '5px',
      width: '100%'
    };

    const stylePaper = {
      padding: '25px 75px',
      marginLeft: '6px'
    };


    // if (job.interviewApplied.date) {
    //   progressPoints.interviewApplied = job.interviewApplied;
    // }
    //
    // if (job.interviewInformational.date) {
    //   progressPoints.interviewInformational = job.interviewInformational;
    // }
    //
    // if (job.interviewTakeHome.date) {
    //   progressPoints.interviewTakeHome =job.interviewTakeHome;
    // }
    //
    // if (job.interviewOnsite.date) {
    //   progressPoints.interviewOnsite = job.interviewOnsite;
    // }
    //
    // if (job.interviewTechnical.date) {
    //   progressPoints.interviewTechnical = job.interviewTechnical;
    // }
    //
    // if (job.interviewPhone.date) {
    //   progressPoints.interviewPhone = job.interviewPhone;
    // }
    //
    // console.log(new Date(Date.parse(job.interviewApplied.date)));
    // console.log(new Date(Date.parse(job.interviewApplied.date)).getFullYear());
    // console.log(new Date(Date.parse(job.interviewApplied.date)).getMonth() + 1);
    // console.log(new Date(Date.parse(job.interviewApplied.date)).getDate());
    // console.log(new Date(Date.parse(job.interviewApplied.date)).getTime());

    return <Grid style={{ margin: '20px auto', maxWidth: '700px' }}>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={12} sm={6} style={styleColumn}>
          <FlatButton
            backgroundColor="#327F9E"
            hoverColor="#47B4E0"
            label="Add a Progress Point"
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapAdd}
            style={styleFlatButton}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <FlatButton
            backgroundColor="#327F9E"
            hoverColor="#47B4E0"
            label="Save and Next"
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapSave}
            style={styleFlatButton}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={styleColumn}>
          <Paper style={stylePaper} zDepth={2}>
            Click "Add a Progress Point" to associate a contact with this job. <br />
            If you don't have any progress points for this job, click "Save and Next"
          </Paper>
        </Col>
      </Row>
      {/* <JobProgress /> */}
    </Grid>;
  }
});

export default JobProgressView;
