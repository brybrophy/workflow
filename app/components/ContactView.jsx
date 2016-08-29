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

    const styles = {
      column: {
        padding: '0 3px'
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
      paper: {
        padding: '25px 75px',
        marginLeft: '6px'
      },
      paragraph: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '200%'
      },
      row: {
        marginBottom: '20px'
      }
    };

    return <Grid style={styles.grid}>
      <Row style={styles.row}>
        <Col sm={6} style={styles.column} xs={12}>
          <FlatButton
            backgroundColor="#327F9E"
            disabled={this.props.editing.length !== 0}
            hoverColor="#47B4E0"
            label="Add a Contact"
            labelStyle={{ color: '#FFF' }}
            onTouchTap={this.handleTouchTapAdd}
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
      {contacts.length === 0
        ? // eslint-disable-line operator-linebreak
        <Row>
          <Col style={styles.column} xs={12}>
            <Paper style={styles.paper} zDepth={2}>
              <p style={styles.paragraph}>
                Click "Add a Contact" to associate a contact with{' '}
                {this.props.job.title} at {this.props.job.companyName}. <br />
                If you don't have any contacts for this job,
                click "Save and Next"
              </p>
            </Paper>
          </Col>
        </Row>
        : // eslint-disable-line operator-linebreak
        contacts.map((contact) => {
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
    </Grid>;
  }
});

export default ContactView;
