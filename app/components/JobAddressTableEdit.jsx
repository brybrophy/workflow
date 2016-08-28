import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Check from 'material-ui/svg-icons/navigation/check';
import Clear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const JobAddressTableEdit = React.createClass({
  getInitialState() {
    return {
      job: this.props.job
    };
  },

  handleChange(event) {
    const nextJob = Object.assign({}, this.state.job, {
      [event.target.name]: event.target.value
    });

    this.setState({ job: nextJob });
  },

  handleTouchTap() {
    this.props.onHandleEditing(null, null);
  },

  handleSaveTouchTap() {
    this.props.onHandleEditing(null, null);
    this.props.onHandleSaveJob(this.state.job);
  },

  handleSelectFieldChange(event, index, value) {
    const nextJob = Object.assign({}, this.state.job, {
      companyState: value
    });

    this.setState({ job: nextJob });
  },

  render() {
    const styles = this.props.styles;
    const job = this.props.job;
    const states = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
      'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN',
      'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
      'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
      'WV', 'WI', 'WY'
    ];

    return <div>
      <h4 style={{ display: 'inline-block' }}>Company Info</h4>
      <FlatButton
        icon={<Check />}
        label="Save"
        onTouchTap={this.handleSaveTouchTap}
        primary={true}
        style={{ float: 'right' }}
      />
      <FlatButton
        icon={<Clear />}
        label="Cancel"
        onTouchTap={this.handleTouchTap}
        secondary={true}
        style={{ float: 'right' }}
      />
      <Paper style={styles.section}>
        <Table selectable={false} style={styles.table}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>ADDRESS</TableHeaderColumn>
              <TableHeaderColumn>CITY</TableHeaderColumn>
              <TableHeaderColumn>STATE</TableHeaderColumn>
              <TableHeaderColumn>ZIP</TableHeaderColumn>
              <TableHeaderColumn>PHONE</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>
                <TextField
                  defaultValue={job.companyStreetAddress}
                  hintText="Address"
                  name="companyStreetAddress"
                  onChange={this.handleChange}
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  defaultValue={job.companyCity}
                  hintText="City"
                  name="companyCity"
                  onChange={this.handleChange}
                />
              </TableRowColumn>
              <TableRowColumn>
                <SelectField
                  hintText="State"
                  name="companyState"
                  onChange={this.handleSelectFieldChange}
                  value={this.state.job.companyState}
                >
                  {states.map((state, index) => {
                    return <MenuItem
                      key={index}
                      primaryText={state}
                      value={state}
                    />;
                  })}
                </SelectField>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  defaultValue={job.companyZip}
                  hintText="Zip"
                  name="companyZip"
                  onChange={this.handleChange}
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  defaultValue={job.companyPhone}
                  hintText="Phone"
                  name="companyPhone"
                  onChange={this.handleChange}
                />
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>;
  }
});

export default JobAddressTableEdit;
