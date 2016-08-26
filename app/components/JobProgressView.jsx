import { Col, Grid, Row } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import JobProgress from 'components/JobProgress';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobProgressView = React.createClass({
  handleTouchTapSave() {
    this.props.updateInterviewSteps();
  },

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

    return <Grid style={{ margin: '20px auto', maxWidth: '1000px' }}>
      <Row style={{ margin: '0 auto 20px auto', maxWidth: '700px' }}>
        <Col xs={12} sm={6} smOffset={6} style={styleColumn}>
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
      <JobProgress
        job={this.props.job}
        updateInterviewStep={this.props.updateInterviewStep}
      />
    </Grid>;
  }
});

export default JobProgressView;
