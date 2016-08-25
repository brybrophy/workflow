import { Grid } from 'react-bootstrap';
import Contact from 'components/Contact';
import ContactForm from 'components/ContactForm';
import React from 'react';
import weakKey from 'weak-key';

const ContactView = React.createClass({
  render() {
    const { contacts } = this.props;

    return <Grid style={{ maxWidth: '700px' }}>
      {contacts.map((contact) => {
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
