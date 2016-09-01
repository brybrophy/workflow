import { Col, Grid, Row } from 'react-bootstrap';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import Contact from 'components/Contact';
import ContactForm from 'components/ContactForm';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import weakKey from 'weak-key';
import { withRouter } from 'react-router';

const ContactView = React.createClass({
  getInitialState() {
    return {
      addNew: false,
      contact: {},
      select: false
    }
  },
  handleTouchTapAdd() {
    this.props.createContact();
  },

  handleTouchTapCancel() {
    this.props.onTouchTapSelect(false);
  },

  handleTouchTapSave() {
    this.props.saveContacts(this.props.contacts);
  },

  handleSelectFieldChange(event, index, value) {
    const nextContact = Object.assign({}, this.state.contact, {
      existingContact: value
    });

    this.setState({ contact: nextContact });
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
            Select the contacts you wish to associate with this job and click done, or click cancel to go back.
          </p>
        </Col>
      </Row>
      <Row>
          <List>
            <ListItem
              primaryText="Chelsea Otakan"
              rightAvatar={<Avatar src="http://www.fillmurray.com/100/100" />}
              leftCheckbox={<Checkbox />}
            />
            <ListItem
              primaryText="James Anderson"
              rightAvatar={<Avatar src="http://www.fillmurray.com/200/200" />}
              leftCheckbox={<Checkbox />}
            />
          </List>
      </Row>
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
            label="Done"
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
