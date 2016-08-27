import { Col, Row } from 'react-bootstrap';
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

    const styles = {
      anchor: {
        cursor: 'pointer',
        display: 'inline-block',
        margin: '10px'
      },
      editDeleteButtons: {
        float: 'right'
      },
      header: {
        display: 'inline-block',
        fontFamily: 'MontserratLight'
      },
      line: {
        fontFamily: 'MontserratHairline',
        fontSize: '4rem',
        margin: '60px 5px 0 15px',
        position: 'relative',
        right: '10px'
      },
      linkedInUrl: {
        float: 'right',
        marginTop: '60px'
      },
      paper: {
        color: '#A9A28E',
        height: '175px',
        padding: '0 20px'
      },
      phone: {
        marginTop: '30px'
      },
      row: {
        margin: '20px auto',
        maxWidth: '1000px'
      }
    };

    return <Row style={styles.row}>
      <Col xs={12}>
        <Paper style={styles.paper} zDepth={2}>
          <Row>
            <Col xs={12}>
              <h2 style={styles.header}>
                {contact.firstName} {contact.lastName}
                <span style={styles.line}> | </span>
              </h2>
              <h4 style={styles.header}>
                {contact.title} at {contact.company}
              </h4>
              <p style={styles.editDeleteButtons}>
                <a onTouchTap={this.handleTouchTapEdit} style={styles.anchor}>
                  edit
                </a>
              </p>
              <p style={styles.editDeleteButtons}>
                <a onTouchTap={this.handleTouchTapDelete} style={styles.anchor}>
                  delete
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p style={styles.phone}>{contact.phone}</p>
              <p>{contact.email}</p>
            </Col>
            <Col xs={8}>
              <p style={styles.linkedInUrl}>
                {contact.linkedInUrl}
              </p>
            </Col>
          </Row>
        </Paper>
      </Col>
    </Row>;
  }
});

export default Contact;
