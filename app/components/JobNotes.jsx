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
      paper: {
        padding: '25px 75px'
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
