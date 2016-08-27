/* eslint-disable max-lines */

import { Col, Grid, Row } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import Joi from 'joi';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router';

const schema = Joi.object({
  companyName: Joi.string().label('Company Name').trim().max(255),
  title: Joi.string().label('Title').trim().max(255),
  companyStreetAddress: Joi.string()
    .label('Street Address')
    .trim().max(255)
    .allow(''),
  companyCity: Joi.string().label('City').trim().max(255).allow(''),
  companyState: Joi.string().label('State').trim().max(255).allow(''),
  companyZip: Joi.string().label('Zip Code').trim().min(5).max(10).allow(''),
  companyPhone: Joi.string()
    .label('Phone Number')
    .trim()
    .min(7)
    .max(255)
    .allow(''),
  jobPostUrl: Joi.string()
    .label('Job URL')
    .trim()
    .max(255)
    .uri({ scheme: /https?/ })
    .allow('')
});

const JobForm = React.createClass({
  getInitialState() {
    return {
      errors: {},
      job: {
        companyName: '',
        title: '',
        companyStreetAddress: '',
        companyCity: '',
        companyState: '',
        companyZip: '',
        companyPhone: '',
        jobPostUrl: '',
        notes: '',
        interviewApplied: { date: '' },
        interviewInformational: { date: '' },
        interviewPhone: { date: '' },
        interviewTakeHome: { date: '' },
        interviewTechnical: { date: '' },
        interviewOnsite: { date: '' },
        interviewOffer: { date: '' },
        interviewRejected: { date: '' }
      }
    };
  },

  handleBlur(event) {
    const { name, value } = event.target;
    const nextErrors = Object.assign({}, this.state.errors);
    const result = Joi.validate({ [name]: value }, schema);

    if (result.error) {
      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    delete nextErrors[name];

    this.setState({ errors: nextErrors });
  },

  handleChange(event) {
    const nextJob = Object.assign({}, this.state.job, {
      [event.target.name]: event.target.value
    });

    this.setState({ job: nextJob });
  },

  handleSelectFieldChange(event, index, value) {
    const nextJob = Object.assign({}, this.state.job, {
      companyState: value
    });

    this.setState({ job: nextJob });
  },

  handleTouchTapCancel() {
    this.props.router.push('/dashboard');
  },

  handleTouchTapSave() {
    const result = Joi.validate(this.state.job, schema, {
      abortEarly: false,
      allowUnknown: true
    });

    if (result.error) {
      const nextErrors = {};

      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    const nextJob = Object.assign({}, result.value);

    this.props.updateJob(nextJob);
  },

  render() {
    const { errors, job } = this.state;
    const styles = {
      column: {
        padding: '0 3px'
      },
      dropDownArrow: {
        left: '95%',
        top: '6px'
      },
      errors: {
        color: '#E48C8C',
        marginTop: '10px'
      },
      flatButton: {
        borderRadius: '3px',
        fontFamily: 'MontserratHairline',
        margin: '5px',
        width: '100%'
      },
      grid: {
        margin: '30px auto',
        maxWidth: '700px'
      },
      menuItem: {
        fontFamily: 'MontserratLight',
        left: '-10px',
        lineHeight: '35px',
        padding: '0 10px',
        top: '-5px',
        width: '100%'
      },
      row: {
        marginBottom: '5px'
      },
      selectField: {
        border: '1px solid lightgray',
        borderRadius: '3px',
        fontFamily: 'MontserratLight',
        height: '35px',
        margin: '5px',
        padding: '5px 10px',
        width: '100%'
      },
      textField: {
        border: '1px solid lightgray',
        borderRadius: '3px',
        fontFamily: 'MontserratLight',
        height: '35px',
        margin: '5px',
        padding: '5px 10px',
        width: '100%'
      },
      textFieldHint: {
        bottom: '3px',
        fontFamily: 'MontserratLight'
      }
    };

    const states = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
      'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN',
      'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
      'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
      'WV', 'WI', 'WY'
    ];

    return <Grid style={styles.grid}>
      <Row>
        <Col sm={12} xs={12}>
          <Row style={{ marginBottom: '20px' }}>
            <Col sm={6} style={styles.column} xs={12}>
              <FlatButton
                backgroundColor="#E48C8C"
                hoverColor="#ED4C4C"
                label="Cancel"
                onTouchTap={this.handleTouchTapCancel}
                style={styles.flatButton}
              />
            </Col>
            <Col sm={6} style={styles.column} xs={12}>
              <FlatButton
                backgroundColor="#327F9E"
                hoverColor="#47B4E0"
                label="Save and Next"
                labelStyle={{ color: 'white' }}
                onTouchTap={this.handleTouchTapSave}
                style={styles.flatButton}
              />
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col sm={6} style={styles.column} xs={12}>
              <TextField
                errorStyle={styles.errors}
                errorText={errors.companyName}
                hintStyle={styles.textFieldHint}
                hintText="Company Name"
                name="companyName"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                style={styles.textField}
                underlineShow={false}
                value={job.companyName}
              />
            </Col>
            <Col sm={6} style={styles.column} xs={12}>
              <TextField
                errorStyle={styles.errors}
                errorText={errors.title}
                hintStyle={styles.textFieldHint}
                hintText="Job Title"
                name="title"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                style={styles.textField}
                underlineShow={false}
                value={job.title}
              />
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col sm={6} style={styles.column} xs={12}>
              <TextField
                errorStyle={styles.errors}
                errorText={errors.companyStreetAddress}
                hintStyle={styles.textFieldHint}
                hintText="Street Address"
                name="companyStreetAddress"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                style={styles.textField}
                underlineShow={false}
                value={job.companyStreetAddress}
              />
            </Col>
            <Col sm={4} style={styles.column} xs={12}>
              <TextField
                errorStyle={styles.errors}
                errorText={errors.companyCity}
                hintStyle={styles.textFieldHint}
                hintText="City"
                name="companyCity"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                style={styles.textField}
                underlineShow={false}
                value={job.companyCity}
              />
            </Col>
            <Col sm={2} style={styles.column} xs={12}>
              <SelectField
                errorStyle={styles.errors}
                errorText={errors.companyState}
                hintStyle={styles.textFieldHint}
                hintText="State"
                iconStyle={styles.dropDownArrow}
                maxHeight={200}
                menuStyle={styles.menuItem}
                name="companyState"
                onBlur={this.handleBlur}
                onChange={this.handleSelectFieldChange}
                style={styles.selectField}
                underlineShow={false}
                value={job.companyState}
              >
                {states.map((state, index) => {
                  return <MenuItem
                    key={index}
                    primaryText={state}
                    value={state}
                  />;
                })}
              </SelectField>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col sm={6} style={styles.column} xs={12}>
              <TextField
                errorStyle={styles.errors}
                errorText={errors.companyZip}
                hintStyle={styles.textFieldHint}
                hintText="Zip Code"
                name="companyZip"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                style={styles.textField}
                underlineShow={false}
                value={job.companyZip}
              />
            </Col>
            <Col sm={6} style={styles.column} xs={12}>
              <TextField
                errorStyle={styles.errors}
                errorText={errors.companyPhone}
                hintStyle={styles.textFieldHint}
                hintText="Phone Number"
                name="companyPhone"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                style={styles.textField}
                underlineShow={false}
                value={job.companyPhone}
              />
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col style={styles.column} xs={12}>
              <TextField
                errorStyle={styles.errors}
                errorText={errors.jobPostUrl}
                hintStyle={styles.textFieldHint}
                hintText="Job URL"
                name="jobPostUrl"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                style={styles.textField}
                underlineShow={false}
                value={job.jobPostUrl}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>;
  }
});

export default withRouter(JobForm);
