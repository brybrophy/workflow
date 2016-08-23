import { Row, Col } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import React from 'react';

const Contact = React.createClass({
  render() {
    const { contact } = this.props;

    const styleLine = {
      fontFamily: 'MontserratHairline',
      fontSize: '4rem',
      marginTop: '60px'
    };

    const stylePaper = {
      height: '175px',
      padding: '20px'
    };

    return <Row style={{ margin: '0 auto', maxWidth: '700px' }} >
      <Col xs={12} sm={3}>
        <Avatar
          size={150}
          src="http://www.fillmurray.com/150/150"
          style={{ height: '100%', width: '100%' }}
        />
      </Col>
      <Col xs={12} sm={9}>
        <Paper style={stylePaper}>
          <Row>
            <Col xs={12} sm={5}>
              <h3>{contact.firstName} {contact.lastName}</h3>
            </Col>
            <Col xs={12} sm={7}>
              <span style={styleLine}> | </span>
              {contact.title} at {contact.company}
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col xs={12} sm={5}>
              <p>{contact.phoneNumber}</p>
              <p>{contact.email}</p>
            </Col>
            <Col xs={12} sm={7} style={{float: 'right' }}>
              {contact.linkedInUrl}
            </Col>
          </Row>
        </Paper>
      </Col>
    </Row>;
  }
});

export default Contact;
