import { Grid, Row } from 'react-bootstrap';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import JobProgress from 'components/JobProgress';
import React from 'react';

const JobProgressView = React.createClass({
  render() {
    const { job } = this.props;
    const progressPoints = {};

    if (job.interviewApplied.date) {
      progressPoints.interviewApplied = job.interviewApplied;
    }

    if (job.interviewInformational.date) {
      progressPoints.interviewInformational = job.interviewInformational;
    }

    if (job.interviewTakeHome.date) {
      progressPoints.interviewTakeHome =job.interviewTakeHome;
    }

    if (job.interviewOnsite.date) {
      progressPoints.interviewOnsite = job.interviewOnsite;
    }

    if (job.interviewTechnical.date) {
      progressPoints.interviewTechnical = job.interviewTechnical;
    }

    if (job.interviewPhone.date) {
      progressPoints.interviewPhone = job.interviewPhone;
    }

    console.log(new Date(Date.parse(job.interviewApplied.date)));
    console.log(new Date(Date.parse(job.interviewApplied.date)).getFullYear());
    console.log(new Date(Date.parse(job.interviewApplied.date)).getMonth() + 1);
    console.log(new Date(Date.parse(job.interviewApplied.date)).getDate());
    console.log(new Date(Date.parse(job.interviewApplied.date)).getTime());

    return <Grid style={{ margin: '20px auto', maxWidth: '650px' }}>
      <Row style={{ margin: '10px auto', maxWidth: '60px' }}>
        <FloatingActionButton onTouchTap={this.handleTouchTap}>
          <ContentAdd />
        </FloatingActionButton>
      </Row>
      <JobProgress />;
    </Grid>
  }
});

export default JobProgressView;
