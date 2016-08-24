import { Col, Grid, Row } from 'react-bootstrap';
import Contact from 'components/Contact';
import ContactForm from 'components/ContactForm';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import React from 'react';

const ContactView = React.createClass({
  handleTouchTap() {
    const nextEditing = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      title: '',
      company: '',
      linkedInUrl: ''
    };

    const nextContacts = [nextEditing].concat(this.props.contacts);

    this.props.updateContacts(nextEditing, nextContacts);
  },

  render() {
    return<Grid>
      <Row style={{ margin: '10px auto', maxWidth: '60px' }}>
        <FloatingActionButton onTouchTap={this.handleTouchTap}>
          <ContentAdd />
        </FloatingActionButton>
      </Row>
      {this.props.contacts.map((contact, index) => {
        if (contact === this.props.editing) {
          return <ContactForm contact={contact} key={index} />;
        }

        return <Contact contact={contact} key={index} />;
      })}
    </Grid>;
  }
});

export default ContactView;
