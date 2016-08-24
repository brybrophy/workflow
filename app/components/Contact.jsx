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
      <Col xs={12} sm={3}>
        <Avatar
          size={150}
          src="http://www.fillmurray.com/150/150"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 5px 10px', height: '80%', left: '30px', position: 'relative', width: '80%' }}
        />
      </Col>
      <Col xs={12} sm={9}>
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
