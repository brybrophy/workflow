import { Grid, Row, Col } from 'react-bootstrap';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const JobProgress = React.createClass({
  getInitialState() {
    return {
      value: 1,
      valueTime: null
    }
  },

  handleChange(event, index, value) {
    this.setState({ value });
  },

  handleChangeTime(event, date) {
    this.setState({ valueTime: date });
  },

  render() {
    const styleDropdown1 = {
      fontSize: '2rem',
      textAlign: 'left',
      width: '350px'
    }

    const styleDropdown2 = {
      width: '150px'
    }

    const stylePaper = {
      padding: '20px 0 30px 0'
    };

    const styleParagraph = {
      borderBottom: '1px solid black'
    };

    const styleSpan = {
      float: 'right'
    };

    return <Grid style={{ margin: '20px auto', maxWidth: '650px' }}>
      <Row>
        <Col xs={12} >
          <Paper style={stylePaper} zDepth={2}>
            <Row>
              <Col xs={12}>
              <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange}
                style={styleDropdown1}
              >
                <MenuItem value={1} primaryText="Choose Progress Point" />
                <MenuItem value={2} primaryText="Applied" />
                <MenuItem value={3} primaryText="Informational" />
                <MenuItem value={4} primaryText="Phone Screen" />
                <MenuItem value={5} primaryText="On Site" />
                <MenuItem value={6} primaryText="Technical" />
              </DropDownMenu>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={6} style={{textAlign: 'center'}}>
                  <div>
                    <DatePicker
                      hintText="Choose Date"
                      textFieldStyle={{ marginTop: '10px' }}
                    />
                  </div>
                  </Col>
                  <Col xs={6}>
                  <TimePicker
                    format="ampm"
                    hintText="Choose Time"
                    value={this.state.valueTime}
                    onChange={this.handleChangeTime}
                    pedantic={true}
                    textFieldStyle={{ marginTop: '10px' }}
                  />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Grid>;
  }
});

export default JobProgress;
