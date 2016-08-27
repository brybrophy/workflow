import { Col, Grid, Row } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import JobProgress from 'components/JobProgress';
import React from 'react';

const JobProgressView = React.createClass({
  handleTouchTapSave() {
    this.props.updateInterviewSteps();
  },

  render() {
    const styles = {
      column: {
        padding: '0 3px'
      },
      flatButton: {
        borderRadius: '3px',
        fontFamily: 'MontserratHairline',
        margin: '5px',
        width: '100%'
      },
      flatButtonLabel: {
        color: '#FFF'
      },
      grid: {
        margin: '20px auto',
        maxWidth: '1000px'
      },
      row: {
        margin: '0 auto 20px auto', maxWidth: '700px'
      }
    };

    return <Grid style={styles.grid}>
      <Row style={styles.row}>
        <Col sm={6} smOffset={6} style={styles.column} xs={12}>
          <FlatButton
            backgroundColor="#327F9E"
            hoverColor="#47B4E0"
            label="Save and Next"
            labelStyle={styles.faltButtonLabel}
            onTouchTap={this.handleTouchTapSave}
            style={styles.flatButton}
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
