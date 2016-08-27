import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobAddressTable = React.createClass({
  handleTouchTap() {
    this.props.onHandleEditing(this.props.job, this.props.id);
  },

  render() {
    const styles = this.props.styles;
    const job = this.props.job;

    return <div>
      <h4 style={{ display: 'inline-block' }}>Company Info</h4>
      <FlatButton
        icon={<EditMode />}
        label="Edit"
        onTouchTap={this.handleTouchTap}
        primary={true}
        style={{ float: 'right' }}
      />
      <Paper style={styles.section}>
        <Table selectable={false} style={styles.table}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>NAME</TableHeaderColumn>
              <TableHeaderColumn>TITLE</TableHeaderColumn>
              <TableHeaderColumn>ADDRESS</TableHeaderColumn>
              <TableHeaderColumn>CITY</TableHeaderColumn>
              <TableHeaderColumn>STATE</TableHeaderColumn>
              <TableHeaderColumn>ZIP</TableHeaderColumn>
              <TableHeaderColumn>PHONE</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            <TableRow>
              <TableRowColumn>{job.companyName}</TableRowColumn>
              <TableRowColumn>{job.title}</TableRowColumn>
              <TableRowColumn>{job.companyStreetAddress}</TableRowColumn>
              <TableRowColumn>{job.companyCity}</TableRowColumn>
              <TableRowColumn>{job.companyState}</TableRowColumn>
              <TableRowColumn>{job.companyZip}</TableRowColumn>
              <TableRowColumn>{job.companyPhone}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>;
  }
});

export default JobAddressTable;
