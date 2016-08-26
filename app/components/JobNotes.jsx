import { Grid, Row, Col } from 'react-bootstrap';
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
    const styleColumn = {
      padding: '10px 3px'
    };

    const stylePaper = {
      padding: '25px 75px'
    };

    const styleFlatButton = {
      borderRadius: '3px',
      fontFamily: 'MontserratHairline',
      margin: '5px',
      width: '100%'
    };

    const styleTextField = {
      fontFamily: 'MontserratLight'
    };

    return <Grid style={{ margin: '20px auto', maxWidth: '700px' }}>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={12} sm={6} smOffset={6} style={styleColumn}>
          <FlatButton
            backgroundColor="#327F9E"
            hoverColor="#47B4E0"
            label="Save and Finish"
            labelStyle={{ color: 'white' }}
            onTouchTap={this.handleSaveTouchTap}
            style={styleFlatButton}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Paper style={stylePaper}>
            <TextField
              fullWidth={true}
              hintText="Type job notes here"
              multiLine={true}
              name="notes"
              onChange={this.handleChange}
              style={styleTextField}
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
