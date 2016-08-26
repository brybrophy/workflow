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
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import InterviewColumn from 'components/InterviewColumn';
import Paper from 'material-ui/Paper';
import React from 'react';
import Timestamp from 'react-timestamp';
import TimePicker from 'material-ui/TimePicker';

const JobProgressTableEdit = React.createClass({
  getInitialState() {
    return {
      job: this.props.job
    }
  },

  handleTouchTap() {
    this.props.onHandleEditing(null, null)
  },

  handleTouchTapSave() {
    const nextDate = new Date(`${date} ${time}`);

    const nextJob = Object.assign({}, this.state.job, {
      [name]: { date: nextDate }
    });

    this.props.onHandleSaveJob(nextJob);
    this.setState({ job: nextJob });
  },

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const formatted =  `${day} ${monthNames[month]} ${year}`;
    return formatted;
  },

  updateInterviewStep(data, type, name) {
    const nextJob = Object.assign({}, this.state.job);

    nextJob[name][type] = data;

    this.setState({ job: nextJob });
  },

  render() {
    const styles = this.props.styles;
    const job = this.props.job;

    const interviewHeaders = [
      'APPLIED',
      'INFOMATIONAL',
      'PHONE SCREEN',
      'TAKE HOME',
      'TECHNICAL',
      'ON SITE',
      'OFFER RECIEVED'
    ];

    const interviewSteps = [
      'interviewApplied',
      'interviewInformational',
      'interviewPhone',
      'interviewTakeHome',
      'interviewTechnical',
      'interviewOnsite',
      'interviewOffer'
    ];

    return <div>
    <h4 style={{display: 'inline-block'}}>Progress</h4>
    <FlatButton
      icon={<Check />}
      label="Save"
      onTouchTap={this.handleTouchTapSave}
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
          {interviewHeaders.map((header) => {
            return <TableHeaderColumn>{header}</TableHeaderColumn>
          })}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
        {interviewSteps.map((step, index) => {
          return <InterviewColumn
            job={this.props.job}
            key={index}
            name={step}
            updateInterviewStep={this.updateInterviewStep}
          />;
        })}
        </TableRow>
      </TableBody>
    </Table>
    </Paper>
    </div>
  }
});

export default JobProgressTableEdit;
