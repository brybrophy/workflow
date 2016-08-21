import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const JobsJob = React.createClass({
  render() {
    const styleCheckbox = {
    }

    const styleColumnBorders = {
        borderRight: '1px solid #A6A399'
    }

    const styleDateText = {
      fontFamily: 'MontserratHairline',
      fontSize: '1.2rem'
    }

    const styleJob = {
      backgroundColor: '#E7E4DB',
      borderRadius: '3px',
      color: '#A6A399',
      padding: '10px 20px'
    }

    const styleSudoColumnEven = {
      display: 'inline-block',
      paddingLeft: '20px',
      textAlign: 'center',
      width: '50%'
    }

    const styleSudoColumnOdd = {
      borderRight: '1px solid #A6A399',
      display: 'inline-block',
      paddingRight: '20px',
      textAlign: 'center',
      width: '50%'
    }

    return <Col xs={9} style={{padding: '20px 40px 0 10px'}}>
      <Paper style={styleJob}>
        <Row>
          <Col md={2} style={styleColumnBorders}>
            <h4 style={{fontFamily: 'MontserratBold'}}>Amazon</h4>
            <h5>Software Engineer, Front End</h5>
          </Col>

          <Col md={3} style={styleColumnBorders}>
            <div style={styleSudoColumnOdd}>
              <h5>Applied On</h5>
              <p style={styleDateText}>Mon, August 29th 9:00 AM</p>
            </div>

            <div style={styleSudoColumnEven}>
              <h5>Informational</h5>
              <p style={styleDateText}>Mon, August 29th 9:00 AM</p>
            </div>
          </Col>

          <Col md={3} style={styleColumnBorders}>
            <div style={styleSudoColumnOdd}>
              <h5>Phone Screen</h5>
              <p style={styleDateText}>Mon, August 29th 9:00 AM</p>
            </div>

            <div style={styleSudoColumnEven}>
              <h5>On Site</h5>
              <p style={styleDateText}>Mon, August 29th 9:00 AM</p>
            </div>
          </Col>

          <Col md={3} style={styleColumnBorders}>
            <div style={styleSudoColumnOdd}>
              <h5>Technical</h5>
              <p style={styleDateText}>Mon, August 29th 9:00 AM</p>
            </div>

            <div style={styleSudoColumnEven}>
              <h5>Offer Date</h5>
              <p style={styleDateText}>Mon, August 29th 9:00 AM</p>
            </div>
          </Col>

          <Col md={1} style={{textAlign: 'center'}}>
            <p style={styleDateText}>Accepted</p>
            <Checkbox
              style={styleCheckbox}
            />

            {/* <p style={styleDateText}>Rejected</p>
            <Checkbox
              style={styleCheckbox}
            /> */}
          </Col>
        </Row>
      </Paper>
    </Col>
  }
});

export default JobsJob;
