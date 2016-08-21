import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-bootstrap';

const JobsSideBar = React.createClass({
  render() {
    const styleTextField = {
      backgroundColor: 'white',
      border: '1px solid lightgray',
      borderRadius: '3px',
      fontFamily: 'MontserratLight',
      height: '45px',
      margin: '5px',
      padding: '5px 10px',
      width: '100%'
    };

    const styleTextFieldHint = {
      color: '#A6A399',
      fontFamily: 'MontserratHairline',
      position: 'relative',
      top: '5px'
    };

    const styleFilter = {
      color: '#A6A399',
      fontFamily: 'MontserratHairline',
      width: '86%'
    }

    const styleFilterMenu = {
      display: 'inline-block',
      paddingBottom: '55px',
      width: '100%'
    }

    const styleRaisedButton = {
      height: '45px',
      marginLeft: '5px',
      width: '100%'
    }

    const styleRaisedButtonLabel = {
      fontFamily: 'Montserrathairline',
      fontSize: '1.8rem',
      position: 'relative',
      top: '10px'
    }

    const styleSearchMenu = {
      backgroundColor: '#F9F8F7',
      padding: '30px 30px 30px 20px'
    }

    return <Col xs={3}>
      <Paper style={styleSearchMenu}>
        <TextField
          hintStyle={styleTextFieldHint}
          hintText="Search"
          style={styleTextField}
          underlineShow={false}
        />

        <RaisedButton
          label="add job"
          labelColor="#A6A399"
          labelStyle={styleRaisedButtonLabel}
          style={styleRaisedButton}
        />
      </Paper>

      <Paper style={styleFilterMenu}>
        <Menu>
          <MenuItem
            primaryText="Company Name"
            style={styleFilter}
          />
          <MenuItem primaryText="Job Title" style={styleFilter} />
          <MenuItem primaryText="Newest" style={styleFilter} />
          <MenuItem primaryText="Oldest" style={styleFilter} />
          <MenuItem primaryText="Most Progress" style={styleFilter} />
          <MenuItem primaryText="Least Progress" style={styleFilter} />
        </Menu>
      </Paper>
  </Col>
  }
});

export default JobsSideBar;
