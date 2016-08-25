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
  handleTouchTap() {
    this.props.handleEditing(null)
  },

  render() {
    const styles = this.props.styles;
    const job = this.props.job;
    return <div>
      <h4 style={{display: 'inline-block'}}>Company</h4>
      <FlatButton
        icon={<Check />}
        label="Save"
        onTouchTap={this.handleTouchTap}
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
      <Table style={styles.table}>
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
                hintText="Address"
                defaultValue={job.companyStreetAddress}
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Address"
                defaultValue={job.companyCity}
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Address"
                defaultValue={job.companyState}
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Address"
                defaultValue={job.companyZip}
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Address"
                defaultValue={job.companyPhone}
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
