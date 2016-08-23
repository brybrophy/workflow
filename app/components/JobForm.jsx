import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const JobForm = React.createClass({
  getInitialState() {
    return {
      job: {}
    }
  },

  componentWillMount() {
    this.setState({ job: this.props.job });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ job: nextProps.job });
  },

  handleChange(event) {
    const nextJob = Object.assign({}, this.state.job, {
      [event.target.name]: event.target.value
    });

    this.setState({ job: nextJob });
  },

  handleSaveTouchTap() {
    console.log(this.state.job);
    axios.patch(`/api/jobs/${this.state.job.id}`, this.state.job)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  handleSelectFieldChange(event, index, value) {
    const nextJob = Object.assign({}, this.state.job, {
      companyState: value
    });

    this.setState({ job: nextJob });
  },

  render() {
    const styleColumn = {
      padding: '0 3px'
    };

    const styleDropDownArrow = {
      left: '95%',
      top: '6px'
    };

    const styleFlatButton = {
      borderRadius: '3px',
      fontFamily: 'MontserratHairline',
      margin: '5px',
      width: '100%'
    };

    const styleMenuItem = {
      fontFamily: 'MontserratLight',
      left: '-10px',
      lineHeight: '35px',
      padding: '0 10px',
      top: '-5px',
      width: '100%'
    };

    const styleSelectField = {
      border: '1px solid lightgray',
      borderRadius: '3px',
      fontFamily: 'MontserratLight',
      height: '35px',
      margin: '5px',
      padding: '5px 10px',
      width: '100%'
    };

    const styleTextField = {
      border: '1px solid lightgray',
      borderRadius: '3px',
      fontFamily: 'MontserratLight',
      height: '35px',
      margin: '5px',
      padding: '5px 10px',
      width: '100%'
    };

    const styleTextFieldHint = {
      bottom: '3px',
      fontFamily: 'MontserratLight'
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
          name="title"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.title}
        />
      </Col>
      <Col xs={12} md={6} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Street Address"
          name="companyStreetAddress"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.companyStreetAddress}
        />
      </Col>
      <Col xs={12} md={4} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="City"
          name="companyCity"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.companyCity}
        />
      </Col>
      <Col xs={12} md={2} style={styleColumn}>
        <SelectField
          hintStyle={styleTextFieldHint}
          hintText="State"
          iconStyle={styleDropDownArrow}
          maxHeight={200}
          menuStyle={styleMenuItem}
          name="companyState"
          onChange={this.handleSelectFieldChange}
          style={styleSelectField}
          underlineShow={false}
          value={this.state.job.companyState}
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
          name="companyZip"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.companyZip}
        />
      </Col>
      <Col xs={12} md={6} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Phone Number"
          name="companyPhone"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.companyPhone}
        />
      </Col>
      <Col xs={12} style={styleColumn}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Job URL"
          name="jobPostUrl"
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={this.state.job.jobPostUrl}
        />
      </Col>
      <Col xs={12} style={styleColumn}>
        <FlatButton
          backgroundColor="#E7E4DB"
          label="Save and Next"
          labelStyle={{ color: '#A6A399' }}
          onTouchTap={this.handleSaveTouchTap}
          style={styleFlatButton}
        />
      </Col>
      <Col xs={12} style={styleColumn}>
        <FlatButton
          backgroundColor="#F5DADA"
          label="Remove Job"
          style={styleFlatButton}
        />
      </Col>
    </Row>;
  }
});

export default JobForm;
