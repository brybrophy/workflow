import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import InterviewColumnEdit from 'components/InterviewColumnEdit';
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

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const JobProgress = React.createClass({
  getInitialState() {
    return {
      job: this.props.job
    };
  },

  handleTouchTapSave() {
    const nextJob = Object.assign({}, this.state.job);

    for (const step of interviewSteps) {
      if (nextJob[step].date && nextJob[step].time) {
        const date = nextJob[step].date;
        const time = nextJob[step].time;

        const nextInterview = new Date(`${date} ${time}`);

        nextJob[step].date = nextInterview;
        nextJob[step].time = '';
      }
    }

    this.props.onHandleSaveJob(nextJob);
    this.setState({ job: nextJob });
  },

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const formatted = `${day} ${monthNames[month]} ${year}`;

    return formatted;
  },

  render() {
    const styles = {
      header: {
        fontSize: '30px',
        margin: '30px',
        textAlign: 'center'
      },
      paragraph: {
        fontFamily: 'MontserratLight',
        fontSize: '16px',
        lineHeight: '200%',
        marginBottom: '20px',
        textAlign: 'center'
      },
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

    return <div>
      <h4 style={styles.header}>Add Interview Progress Points</h4>
        <p style={styles.paragraph}>
          Below you can add common progress points for the interview process.
          For example, if you have already applied for this job, add the date
          and time that you applied. You can add progress points later if you dont have any now.
        </p>
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
    </div>;
  }
});

export default JobProgress;
