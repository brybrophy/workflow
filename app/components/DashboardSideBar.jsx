import { Col } from 'react-bootstrap';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router';

const DashboardSideBar = React.createClass({
  handleTouchTap() {
    this.props.router.push('/new/job');
  },

  render() {
    const styles = {
      filter: {
        color: '#A6A399',
        fontFamily: 'MontserratHairline',
        width: '86%'
      },
      filterMenu: {
        display: 'inline-block',
        paddingBottom: '55px',
        width: '100%'
      },
      raisedButton: {
        height: '45px',
        marginLeft: '5px',
        width: '100%'
      },
      raisedButtonLabel: {
        fontFamily: 'Montserrathairline',
        fontSize: '1.5rem',
        position: 'relative',
        top: '10px'
      },
      searchMenu: {
        backgroundColor: '#F9F8F7',
        padding: '30px 30px 30px 20px'
      },
      textField: {
        backgroundColor: 'white',
        border: '1px solid lightgray',
        borderRadius: '3px',
        fontFamily: 'MontserratLight',
        height: '45px',
        margin: '5px',
        padding: '5px 10px',
        width: '100%'
      },
      textFieldHint: {
        color: '#A6A399',
        fontFamily: 'MontserratHairline',
        position: 'relative',
        top: '5px'
      }
    };

    return <Col xs={12} md={3}>
      <Paper style={styles.searchMenu}>
        <TextField
          hintStyle={styles.textFieldHint}
          hintText="Search"
          style={styles.textField}
          underlineShow={false}
        />

        <RaisedButton
          label="Add Job"
          labelColor="#A6A399"
          labelStyle={styles.raisedButtonLabel}
          onTouchTap={this.handleTouchTap}
          style={styles.raisedButton}
        />
      </Paper>

      <Paper style={styles.filterMenu}>
        <Menu>
          <MenuItem
            primaryText="Company Name"
            style={styles.filter}
          />
          <MenuItem primaryText="Job Title" style={styles.filter} />
          <MenuItem primaryText="Newest" style={styles.filter} />
          <MenuItem primaryText="Oldest" style={styles.filter} />
          <MenuItem primaryText="Most Progress" style={styles.filter} />
          <MenuItem primaryText="Least Progress" style={styles.filter} />
        </Menu>
      </Paper>
  </Col>
  }
});

export default withRouter(DashboardSideBar);
