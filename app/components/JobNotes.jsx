import { Col, Grid, Row } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';

const JobNotes = React.createClass({
  handleChange(event) {
    this.props.updateNotes(event.target.value);
  },

  handleSaveTouchTap() {
    this.props.saveNotes();
  },

  render() {
    const styles = {
      column: {
        padding: '10px 3px'
      },
      flatButton: {
        borderRadius: '3px',
        fontFamily: 'MontserratHairline',
        margin: '5px',
        width: '100%'
      },
      flatButtonLabel: {
        color: 'white'
      },
      header: {
        fontSize: '30px',
        margin: '30px',
        textAlign: 'center'
      },
      paper: {
        padding: '25px 75px'
      },
      paragraph: {
        fontFamily: 'MontserratLight',
        fontSize: '16px',
        lineHeight: '200%',
        marginBottom: '20px',
        textAlign: 'center'
      },
      textField: {
        fontFamily: 'MontserratLight'
      }
    };

    return <Grid style={{ margin: '20px auto', maxWidth: '700px' }}>
      <Row style={{ marginBottom: '20px' }}>
        <Col sm={6} smOffset={6} style={styles.column} xs={12}>
          <FlatButton
            backgroundColor="#327F9E"
            hoverColor="#47B4E0"
            label="Save and Finish"
            labelStyle={styles.flatButtonLabel}
            onTouchTap={this.handleSaveTouchTap}
            style={styles.flatButton}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 style={styles.header}>Notes</h4>
          <p style={styles.paragraph}>
            Click in the box below to add notes about this job. This is a place where you can keep any information that will help you along your path to success!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Paper style={styles.paper}>
            <TextField
              fullWidth={true}
              hintText="Type job notes here"
              multiLine={true}
              name="notes"
              onChange={this.handleChange}
              style={styles.textField}
              underlineShow={false}
              value={this.props.job.notes}
            />
          </Paper>
        </Col>
      </Row>
    </Grid>;
  }
});

export default JobNotes;
