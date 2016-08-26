import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import InterviewColumnEdit from 'components/InterviewColumnEdit';
import Paper from 'material-ui/Paper';
import React from 'react';
import Timestamp from 'react-timestamp';
import TimePicker from 'material-ui/TimePicker';

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

const JobProgress = React.createClass({
  getInitialState() {
    return {
      job: this.props.job
    }
  },

  handleTouchTapSave() {
    const nextJob = Object.assign({}, this.state.job);

    for (const step of interviewSteps) {
      if (nextJob[step]['date'] && nextJob[step]['time']) {
        const date = nextJob[step]['date'];
        const time = nextJob[step]['time'];

        const nextInterview = new Date(`${date} ${time}`);

        nextJob[step]['date'] = nextInterview;
        nextJob[step]['time'] = '';
      }
    }

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

  render() {
    const styles = {
      section: {
        backgroundColor: 'white',
        borderRadius: '5px',
        marginBottom: '10px',
        padding: '10px'
      },
      table: {
        marginBottom: '20px'
      }
    };
    const job = this.props.job;

    return <div>
    <h4 style={{fontSize: '30px', margin: '30px', textAlign: 'center' }}>Add Interview Progress Points</h4>
    <Paper style={styles.section}>
    <Table style={styles.table} selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          {interviewHeaders.map((header, index) => {
            return <TableHeaderColumn key={index}>{header}</TableHeaderColumn>
          })}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
        {interviewSteps.map((step, index) => {
          return <InterviewColumnEdit
            job={this.props.job}
            key={index}
            name={step}
            updateInterviewStep={this.props.updateInterviewStep}
          />;
        })}
        </TableRow>
      </TableBody>
    </Table>
    </Paper>
    </div>
  }
});

export default JobProgress;
