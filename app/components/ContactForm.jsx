import { Grid, Row, Col } from 'react-bootstrap';
import Contact from 'components/Contact';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const ContactForm = React.createClass({
  getInitialState() {
    return {
      contact: {
        firstName: 'Ryan',
        lastName: 'Sobol',
        email: 'contact@ryansobol.com',
        phoneNumber: '(206) 222-222',
        title: 'Lead Instructor',
        company: 'Galvanize',
        linkedInUrl:'https://www.linkedin.com/in/ryansobol'
      }
    }
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

  render() {
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

    return <Grid>
      <Row style={{ margin: '20px auto', maxWidth: '500px' }}>
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
            value={this.state.contact.existingContact}
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
            hintStyle={styleTextFieldHint}
            hintText="LinkedIn URL"
            name="linkedInUrl"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.contact.linkedInUrl}
          />
        </Col>
        <Col xs={12} sm={3} style={styleColumn}>
          <FlatButton
            backgroundColor="#E7E4DB"
            label="Import"
            labelStyle={{ color: '#A6A399' }}
            style={styleFlatButton}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <TextField
            hintStyle={styleTextFieldHint}
            hintText="First Name"
            name="firstName"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.contact.firstName}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <TextField
            hintStyle={styleTextFieldHint}
            hintText="Last Name"
            name="lastName"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.contact.lastName}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <TextField
            hintStyle={styleTextFieldHint}
            hintText="Email"
            name="email"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.contact.email}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <TextField
            hintStyle={styleTextFieldHint}
            hintText="Phone Number"
            name="phoneNumber"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.contact.phoneNumber}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <TextField
            hintStyle={styleTextFieldHint}
            hintText="Title"
            name="title"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.contact.title}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <TextField
            hintStyle={styleTextFieldHint}
            hintText="Company"
            name="company"
            onChange={this.handleChange}
            style={styleTextField}
            underlineShow={false}
            value={this.state.contact.company}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <FlatButton
            backgroundColor="#F5DADA"
            label="Cancel"
            style={styleFlatButton}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <FlatButton
            backgroundColor="#E7E4DB"
            label="Save and Next"
            labelStyle={{ color: '#A6A399' }}
            style={styleFlatButton}
          />
        </Col>
      </Row>
      <Contact contact={this.state.contact}/>
    </Grid>;
  }
});

export default ContactForm;
