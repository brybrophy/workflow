import { Col, Row } from 'react-bootstrap';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import FlatButton from 'material-ui/FlatButton';
import Joi from 'joi';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const schema = Joi.object({
  firstName: Joi.string().trim().max(255),
  lastName: Joi.string().trim().max(255),
  linkedInUrl: Joi.string().trim().uri({ scheme: /https?/ }).allow(''),
  email: Joi.string().email().trim().max(255).allow(''),
  phone: Joi.string().trim().max(255).allow(''),
  title: Joi.string().trim().max(255).allow(''),
  company: Joi.string().trim().max(255).allow('')
});

const ContactForm = React.createClass({
  getInitialState() {
    return {
      contact: this.props.contact,
      errors: {}
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
    const nextContact = Object.assign({}, this.state.contact, {
      [event.target.name]: event.target.value
    });

    this.setState({ contact: nextContact });
  },

  handleSelectFieldChange(event, index, value) {
    const nextContact = Object.assign({}, this.state.contact, {
      existingContact: value
    });

    this.setState({ contact: nextContact });
  },

  handleTouchTapCancel() {
    this.props.stopEditingContact(this.props.contact);
  },

  handleTouchTapSave() {
    const result = Joi.validate(this.state.contact, schema, {
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

    const nextContact = Object.assign({}, result.value);

    this.props.updateContact(this.props.contact, nextContact);
  },

  render() {
    const { errors, contact } = this.state;

    const styleColumn = {
      padding: '0 3px'
    };

    const styleDropDownArrow = {
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
      backgroundColor: '#E7E4DB',
      border: '1px solid lightgray',
      borderRadius: '3px',
      fontFamily: 'MontserratLight',
      lineHeight: 'inherit',
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

    return <Row style={{ margin: '20px auto' }}>
      <Col xs={12} style={styleColumn}>
        <SelectField
          hintStyle={styleTextFieldHint}
          hintText="SELECT EXISTING CONTACT"
          iconStyle={styleDropDownArrow}
          maxHeight={200}
          menuStyle={styleMenuItem}
          name="existingContact"
          onChange={this.handleSelectFieldChange}
          style={styleSelectField}
          underlineShow={false}
          value={contact.existingContact}
        >
          <MenuItem
            key={1}
            primaryText="Bobby Kennedy"
            secondaryText="Test Engineer at Amazon"
            value={1}
          />
          <MenuItem
            key={2}
            primaryText="Neil Armstrong"
            secondaryText="UX/UI Designer at Amazon"
            value={2}
          />
        </SelectField>
      </Col>
      <Col xs={12} style={styleColumn}>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>ADD CONTACT</p>
      </Col>
      <Col xs={12} sm={9} style={styleColumn}>
        <TextField
          errorText={errors.url}
          hintStyle={styleTextFieldHint}
          hintText="LinkedIn URL"
          name="linkedInUrl"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={contact.linkedInUrl}
        />
      </Col>
      <Col xs={12} sm={3} style={styleColumn}>
        <FlatButton
          backgroundColor="#327F9E"
          hoverColor="#F0C7A2"
          label="Import"
          labelStyle={{ color: '#FFF' }}
          style={styleFlatButton}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <TextField
          errorText={errors.firstName}
          hintStyle={styleTextFieldHint}
          hintText="First Name"
          name="firstName"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={contact.firstName}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <TextField
          errorText={errors.lastName}
          hintStyle={styleTextFieldHint}
          hintText="Last Name"
          name="lastName"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={contact.lastName}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <TextField
          errorText={errors.email}
          hintStyle={styleTextFieldHint}
          hintText="Email"
          name="email"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={contact.email}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <TextField
          errorText={errors.phone}
          hintStyle={styleTextFieldHint}
          hintText="Phone Number"
          name="phone"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={contact.phone}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <TextField
          errorText={errors.title}
          hintStyle={styleTextFieldHint}
          hintText="Title"
          name="title"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={contact.title}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <TextField
          errorText={errors.company}
          hintStyle={styleTextFieldHint}
          hintText="Company"
          name="company"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          underlineShow={false}
          value={contact.company}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <FlatButton
          backgroundColor="#E48C8C"
          hoverColor="#ED4C4C"
          label="Cancel"
          onTouchTap={this.handleTouchTapCancel}
          style={styleFlatButton}
        />
      </Col>
      <Col xs={12} sm={6} style={styleColumn}>
        <FlatButton
          backgroundColor="#327F9E"
          hoverColor="#F0C7A2"
          label="Save and Next"
          labelStyle={{ color: '#FFF' }}
          onTouchTap={this.handleTouchTapSave}
          style={styleFlatButton}
        />
      </Col>
    </Row>;
  }
});

export default ContactForm;
