import { Grid, Row, Col } from 'react-bootstrap';
import React from 'react';
import TextField from 'material-ui/TextField';

const JobForm = React.createClass({
  getInitialState() {
    return {
      job: {
        companyName: 'Amazon',
        jobTitle: 'Software Engineer, Front-End'
      }
    }
  },

  handleChange(event) {
    const nextJob = Object.assign({}, this.state.job, {
      [event.target.name]: event.target.value
    });

    this.setState({ job: nextJob });
  },

  render() {
    const styleTextField = {
      border: '1px solid lightgray',
      borderRadius: '5px',
      margin: '5px',
      padding: '5px',
      width: '100%'
    };

    return <Grid>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            hintText="Company Name"
            name="companyName"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.job.companyName}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            hintText="Job Title"
            name="jobTitle"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.job.jobTitle}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            hintText="Street Address"
            name="streetAddress"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.job.streetAddress}
          />
        </Col>
        <Col xs={12} md={4}>
          <TextField
            hintText="City"
            name="city"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.job.city}
          />
        </Col>
        <Col xs={12} md={2}>
          <TextField
            hintText="State"
            name="state"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.job.state}
          />
        </Col>
      </Row>
    </Grid>;
  }
});

export default JobForm;
