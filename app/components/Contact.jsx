import { Row, Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import React from 'react';

const Contact = React.createClass({
  handleTouchTapDelete() {
    this.props.openDeleteDialog(this.props.contact);
  },

  handleTouchTapEdit() {
    this.props.startEditingContact(this.props.contact);
  },

  render() {
    const { contact } = this.props;

    const styleLine = {
      fontFamily: 'MontserratHairline',
      fontSize: '4rem',
      margin: '60px 5px 0 15px',
      position: 'relative',
      right: '10px'
    };

    const stylePaper = {
      color: '#A9A28E',
      height: '175px',
      padding: '0 20px'
    };

    return <Row style={{ margin: '20px auto', maxWidth: '1000px' }} >
      <Col xs={12}>
        <Paper style={stylePaper} zDepth={2}>
          <Row>
            <Col xs={12}>
              <h2
                style={{display: 'inline-block', fontFamily: 'MontserratLight'}}
              >
                {contact.firstName} {contact.lastName}
                <span style={styleLine}> | </span>
              </h2>
              <h4 style={{display: 'inline-block', fontFamily: 'MontserratLight'}}>{contact.title} at {contact.company}</h4>
              <p style={{ float: 'right' }}><a style={{ cursor: 'pointer', display: 'inline-block', margin: '10px' }} onTouchTap={this.handleTouchTapEdit}>
                edit
              </a></p>

              <p style={{ float: 'right' }}><a style={{ cursor: 'pointer', display: 'inline-block', margin: '10px' }} onTouchTap={this.handleTouchTapDelete}>
                delete
              </a></p>
            </Col>
          </Row>
          <Row >
            <Col xs={4}>
              <p style={{marginTop: '30px'}}>{contact.phone}</p>
              <p>{contact.email}</p>
            </Col>
            <Col xs={8}>
              <p style={{float: 'right', marginTop: '60px'}}>{contact.linkedInUrl}</p>
            </Col>
          </Row>
        </Paper>
      </Col>
    </Row>;
  }
});

export default Contact;
