import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Check from 'material-ui/svg-icons/navigation/check';
import Clear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';
import Timestamp from 'react-timestamp';

const JobAddressTableEdit = React.createClass({
  getInitialState() {
    return {
      job: {}
    }
  },

  componentWillMount() {
    const nextJob = this.props.job;

    this.setState({ job: nextJob });
  },

  handleChange(event) {
    const nextJob = Object.assign({}, this.state.job, {
      [event.target.name]: event.target.value
    });

    this.setState({ job: nextJob });
  },

  handleTouchTap() {
    this.props.handleEditing(null, null)
  },

  handleSaveTouchTap() {
    this.props.handleEditing(null, null)
    this.props.handleSaveJob(this.state.job)
  },

  render() {
    const styles = this.props.styles;
    const job = this.props.job;
    return <div>
      <h4 style={{display: 'inline-block'}}>Company</h4>
      <FlatButton
        icon={<Check />}
        label="Save"
        onTouchTap={this.handleSaveTouchTap}
        primary={true}
        style={{float: 'right'}}
      />
      <FlatButton
        icon={<Clear />}
        label="Cancel"
        onTouchTap={this.handleTouchTap}
        secondary={true}
        style={{float: 'right'}}
      />
      <Paper style={styles.section}>
      <Table style={styles.table} selectable={false}>
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
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                defaultValue={job.companyState}
                hintText="State"
                name="companyState"
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                defaultValue={job.companyZip}
                hintText="Zip"
                name="companyZip"
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                defaultValue={job.companyPhone}
                hintText="Phone"
                name="companyPhone"
              />
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      </Paper>
    </div>
  }
});

export default JobAddressTableEdit;
