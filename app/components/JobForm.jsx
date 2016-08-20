import { Grid, Row, Col } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const JobForm = React.createClass({
  getInitialState() {
    return {
      job: {
        companyName: 'Amazon',
        jobTitle: 'Software Engineer, Front-End',
        streetAddress: '440 Terry Ave. N',
        city: 'Seattle',
        state: 'WA',
        zip: 98109,
        phoneNumber:'(206) 266-1000',
        jobUrl: 'www.amazon.jobs'
      }
    }
  },

  handleChange(event) {
    const nextJob = Object.assign({}, this.state.job, {
      [event.target.name]: event.target.value
    });

    this.setState({ job: nextJob });
  },

  handleSelectFieldChange(event, index, value) {
    const nextJob = Object.assign({}, this.state.job, {
      state: value
    });

    this.setState({ job: nextJob });
  },

  render() {
    const styleColumn = {
      padding: '0 3px'
    };

    const styleFlatButton = {
      borderRadius: '3px',
      margin: '5px',
      width: '100%'
    };

    const styleMenuItem = {
      left: '-10px',
      lineHeight: '35px',
      padding: '0 10px',
      top: '-5px',
      width: '100%'
    };

    const styleSelectField = {
      border: '1px solid lightgray',
      borderRadius: '3px',
      height: '35px',
      margin: '5px',
      padding: '5px 10px',
      width: '100%'
    };

    const styleTextField = {
      border: '1px solid lightgray',
      borderRadius: '3px',
      height: '35px',
      margin: '5px',
      padding: '5px 10px',
      width: '100%'
    };

    const styleTextFieldHint = {
      bottom: '3px'
    };

    const states = ['', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    return <Row>
      <Col xs={12} md={6} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Company Name"
          name="companyName"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.companyName}
        />
      </Col>
      <Col xs={12} md={6} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Job Title"
          name="jobTitle"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.jobTitle}
        />
      </Col>
      <Col xs={12} md={6} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Street Address"
          name="streetAddress"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.streetAddress}
        />
      </Col>
      <Col xs={12} md={4} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="City"
          name="city"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.city}
        />
      </Col>
      <Col xs={12} md={2} style={styleColumn}>
        <SelectField
          // autoWidth={true}
          hintStyle={styleTextFieldHint}
          hintText="State"
          maxHeight={200}
          menuStyle={styleMenuItem}
          name="state"
          onChange={this.handleSelectFieldChange}
          style={styleSelectField}
          underlineShow={false}
          value={this.state.job.state}
        >
          {states.map((state, index) => {
            return <MenuItem
              key={index}
              primaryText={state}
              value={state}
            />
          })}
        </SelectField>
      </Col>
      <Col xs={12} md={6} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Zip Code"
          name="zip"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.zip}
        />
      </Col>
      <Col xs={12} md={6} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Phone Number"
          name="phoneNumber"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.phoneNumber}
        />
      </Col>
      <Col xs={12} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Job URL"
          name="jobUrl"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.jobUrl}
        />
      </Col>
      <Col xs={12} style={styleColumn}>
        <FlatButton
          backgroundColor="lightgray"
          label="Save and Next"
          style={styleFlatButton}
        />
      </Col>
      <Col xs={12} style={styleColumn}>
        <FlatButton
          backgroundColor="red"
          label="Remove Job"
          style={styleFlatButton}
        />
      </Col>
    </Row>;
  }
});

export default JobForm;
