import { Col, Grid, Row } from 'react-bootstrap';
import Contact from 'components/Contact';
import ContactForm from 'components/ContactForm';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import weakKey from 'weak-key';

const ContactView = React.createClass({
  handleTouchTapAdd() {
    this.props.createContact();
  },

  handleTouchTapSave() {
    this.props.saveContacts(this.props.contacts);
  },

  render() {
    const { contacts } = this.props;

    const styleColumn = {
      padding: '0 3px'
    };

    const styleFlatButton = {
      borderRadius: '3px',
      fontFamily: 'MontserratHairline',
      margin: '5px',
      width: '100%'
    };

    const stylePaper = {
      padding: '25px 75px',
      marginLeft: '6px'
    };

    const styleParagraph = {
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '200%'
    };

    return <Grid style={{ margin: '30px auto', maxWidth: '700px' }}>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={12} sm={6} style={styleColumn}>
          <FlatButton
            backgroundColor="#327F9E"
            disabled={this.props.editing.length !== 0}
            hoverColor="#47B4E0"
            label="Add a Contact"
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapAdd}
            style={styleFlatButton}
          />
        </Col>
        <Col xs={12} sm={6} style={styleColumn}>
          <FlatButton
            backgroundColor="#327F9E"
            hoverColor="#47B4E0"
            label="Save and Next"
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapSave}
            style={styleFlatButton}
          />
        </Col>
      </Row>
      {contacts.length === 0
        ?
        <Row>
          <Col xs={12} style={styleColumn}>
            <Paper style={stylePaper} zDepth={2}>
              <p style={styleParagraph}>Click "Add a Contact" to associate a contact with {this.props.job.title} at {this.props.job.companyName}. <br />
              If you don't have any contacts for this job, click "Save and Next"</p>
            </Paper>
          </Col>
        </Row>
        :
        contacts.map((contact) => {
        if (this.props.editing.indexOf(contact) !== -1) {
          return <ContactForm
            key={weakKey(contact)}
            contact={contact}
            stopEditingContact={this.props.stopEditingContact}
            updateContact={this.props.updateContact}
          />
        }

        return <Contact
          key={weakKey(contact)}
          openDeleteDialog={this.props.openDeleteDialog}
          contact={contact}
          startEditingContact={this.props.startEditingContact}
        />
      })}
    </Grid>;
  }
});

export default ContactView;
