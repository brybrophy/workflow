import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import InterviewColumn from 'components/InterviewColumn';
import Paper from 'material-ui/Paper';
import React from 'react';

const interviewSteps = [
  'interviewApplied',
  'interviewInformational',
  'interviewPhone',
  'interviewTakeHome',
  'interviewTechnical',
  'interviewOnsite',
  'interviewOffer'
];

const interviewHeaders = [
  'APPLIED',
  'INFOMATIONAL',
  'PHONE SCREEN',
  'TAKE HOME',
  'TECHNICAL',
  'ON SITE',
  'OFFER RECIEVED'
];

const JobProgressTable = React.createClass({
  handleTouchTap() {
    this.props.onHandleEditing(this.props.job, this.props.id);
  },

  render() {
    const styles = this.props.styles;

    return <div>
      <h4 style={{ display: 'inline-block' }}>Interview Progress</h4>
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
              {interviewHeaders.map((header, index) => {
                return <TableHeaderColumn key={index}>
                  {header}
                </TableHeaderColumn>;
              })}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            <TableRow>
              {interviewSteps.map((step, index) => {
                return <InterviewColumn
                  job={this.props.job}
                  key={index}
                  name={step}
                />;
              })}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>;
  }
});

export default JobProgressTable;
