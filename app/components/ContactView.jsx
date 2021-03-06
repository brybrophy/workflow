import { Col, Grid, Row } from 'react-bootstrap';
import Contact from 'components/Contact';
import ContactForm from 'components/ContactForm';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import weakKey from 'weak-key';
import { withRouter } from 'react-router';

const ContactView = React.createClass({
  getInitialState() {
    return {
      contact: {}
    }
  },
  handleTouchTapAdd() {
    this.props.createContact();
  },

  handleTouchTapCancel() {
    this.props.router.push('/dashboard');
  },

  handleTouchTapSave() {
    this.props.saveContacts(this.props.contacts);
  },

  handleTouchTapSelect() {
    this.props.onTouchTapSelect(true);
  },

  handleSelectFieldChange(event, index, value) {
    const nextContact = Object.assign({}, this.state.contact, {
      existingContact: value
    });

    this.setState({ contact: nextContact });
  },

  cancelSelect(item, boolean) {
    const nextSelect = boolean;

    this.setState({ [item]: nextSelect });
  },

  render() {
    const { contact } = this.state;
    const { contacts } = this.props;

    const styles = {
      centerCol: {
        textAlign: 'center'
      },
      column: {
        padding: '0 3px'
      },
      dropDownArrow: {
        height: '35px',
        margin: '-10px 0 0 0',
        width: '35px'
      },
      flatButton: {
        borderRadius: '3px',
        fontFamily: 'MontserratHairline',
        margin: '5px',
        width: '100%'
      },
      flatButtonAlt: {
        borderRadius: '3px',
        fontFamily: 'MontserratHairline',
        margin: '5px',
        width: '50%'
      },
      grid: {
        margin: '0 auto',
        maxWidth: '700px'
      },
      header: {
        fontSize: '30px',
        margin: '30px',
        textAlign: 'center'
      },
      menuItem: {
        fontFamily: 'MontserratLight',
        left: '-10px',
        lineHeight: '35px',
        padding: '0 10px',
        top: '-5px',
        width: '100%'
      },
      paper: {
        padding: '25px 75px',
        marginLeft: '6px'
      },
      paragraph1: {
        fontFamily: 'MontserratLight',
        fontSize: '16px',
        lineHeight: '200%',
        textAlign: 'center'
      },
      paragraph2: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '200%'
      },
      row: {
        marginBottom: '20px'
      }
    };

    return <Grid style={styles.grid}>
      <Row>
        <Col>
          <h4 style={styles.header}>Contacts</h4>
          <p style={styles.paragraph1}>
            Below you can associate any of your contacts with this job. You can select existing contacts, add a new one, or skip this step.
          </p>
        </Col>
      </Row>
      <Row>
        <Col style={styles.centerCol} xs={12}>
          <FlatButton
            backgroundColor="#47B4E0"
            hoverColor="#327F9E"
            label="Select Existing Contacts"
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapSelect}
            style={styles.flatButtonAlt}
          />
        </Col>
        <Col style={styles.centerCol} xs={12}>
          <FlatButton
            backgroundColor="#47B4E0"
            hoverColor="#327F9E"
            label="Add New Contact"
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapAdd}
            style={styles.flatButtonAlt}
          />
        </Col>
      </Row>
      {contacts.map((contact) => {
          if (this.props.editing.indexOf(contact) !== -1) {
            return <ContactForm
              contact={contact}
              key={weakKey(contact)}
              stopEditingContact={this.props.stopEditingContact}
              updateContact={this.props.updateContact}
            />;
          }

          return <Contact
            contact={contact}
            key={weakKey(contact)}
            openDeleteDialog={this.props.openDeleteDialog}
            startEditingContact={this.props.startEditingContact}
          />;
        })
      }
      <Row style={styles.row}>
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
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapSave}
            style={styles.flatButton}
          />
        </Col>
      </Row>
    </Grid>;
  }
});

export default withRouter(ContactView);
