import { Grid, Row, Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';

const JobNotes = React.createClass({
  handleChange(event) {
    this.props.updateNotes(event.target.value);
  },

  render() {
    const stylePaper = {
      padding: '25px 75px'
    };

    const styleTextField = {
      fontFamily: 'MontserratLight'
    };

    return <Grid>
      <Row style={{ margin: '20px auto', maxWidth: '700px' }}>
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
