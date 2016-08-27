import { Col, Row } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import Joi from 'joi';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const schema = Joi.object({
  firstName: Joi.string().label('First Name').trim().max(255),
  lastName: Joi.string().label('Last Name').trim().max(255),
  linkedInUrl: Joi.string()
    .label('LinkedIn URL')
    .trim()
    .uri({ scheme: /https?/ })
    .allow(''),
  email: Joi.string().label('Email').email().trim().max(255).allow(''),
  phone: Joi.string().label('Phone').trim().max(255).allow(''),
  title: Joi.string().label('Title').trim().max(255).allow(''),
  company: Joi.string().label('Company').trim().max(255).allow('')
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

    const styles = {
      column: {
        padding: '0 3px'
      },
      dropDownArrow: {
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
      menuItem: {
        fontFamily: 'MontserratLight',
        left: '-10px',
        lineHeight: '35px',
        padding: '0 10px',
        top: '-5px',
        width: '100%'
      },
      selectField: {
        backgroundColor: '#E7E4DB',
        border: '1px solid lightgray',
        borderRadius: '3px',
        fontFamily: 'MontserratLight',
        lineHeight: 'inherit',
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

    return <Row style={{ margin: '20px auto' }}>
      <Col style={styles.column} xs={12}>
        <SelectField
          hintStyle={styles.textFieldHint}
          hintText="SELECT EXISTING CONTACT"
          iconStyle={styles.dropDownArrow}
          maxHeight={200}
          menuStyle={styles.menuItem}
          name="existingContact"
          onChange={this.handleSelectFieldChange}
          style={styles.selectField}
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
      <Col style={styles.column} xs={12}>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>ADD CONTACT</p>
      </Col>
      <Col sm={9} style={styles.column} xs={12}>
        <TextField
          errorStyle={styles.errors}
          errorText={errors.linkedInUrl}
          hintStyle={styles.textFieldHint}
          hintText="LinkedIn URL"
          name="linkedInUrl"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styles.textField}
          underlineShow={false}
          value={contact.linkedInUrl}
        />
      </Col>
      <Col sm={3} style={styles.column} xs={12}>
        <FlatButton
          backgroundColor="#327F9E"
          hoverColor="#47B4E0"
          label="Import"
          labelStyle={{ color: '#FFF' }}
          style={styles.flatButton}
        />
      </Col>
      <Col sm={6} style={styles.column} xs={12}>
        <TextField
          errorStyle={styles.errors}
          errorText={errors.firstName}
          hintStyle={styles.textFieldHint}
          hintText="First Name"
          name="firstName"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styles.textField}
          underlineShow={false}
          value={contact.firstName}
        />
      </Col>
      <Col sm={6} style={styles.column} xs={12}>
        <TextField
          errorStyle={styles.errors}
          errorText={errors.lastName}
          hintStyle={styles.textFieldHint}
          hintText="Last Name"
          name="lastName"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styles.textField}
          underlineShow={false}
          value={contact.lastName}
        />
      </Col>
      <Col sm={6} style={styles.column} xs={12}>
        <TextField
          errorStyle={styles.errors}
          errorText={errors.email}
          hintStyle={styles.textFieldHint}
          hintText="Email"
          name="email"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styles.textField}
          underlineShow={false}
          value={contact.email}
        />
      </Col>
      <Col sm={6} style={styles.column} xs={12}>
        <TextField
          errorStyle={styles.errors}
          errorText={errors.phone}
          hintStyle={styles.textFieldHint}
          hintText="Phone Number"
          name="phone"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styles.textField}
          underlineShow={false}
          value={contact.phone}
        />
      </Col>
      <Col sm={6} style={styles.column} xs={12}>
        <TextField
          errorStyle={styles.errors}
          errorText={errors.title}
          hintStyle={styles.textFieldHint}
          hintText="Title"
          name="title"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styles.textField}
          underlineShow={false}
          value={contact.title}
        />
      </Col>
      <Col sm={6} style={styles.column} xs={12}>
        <TextField
          errorStyle={styles.errors}
          errorText={errors.company}
          hintStyle={styles.textFieldHint}
          hintText="Company"
          name="company"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styles.textField}
          underlineShow={false}
          value={contact.company}
        />
      </Col>
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
          label="Done"
          labelStyle={{ color: '#FFF' }}
          onTouchTap={this.handleTouchTapSave}
          style={styles.flatButton}
        />
      </Col>
    </Row>;
  }
});

export default ContactForm;
