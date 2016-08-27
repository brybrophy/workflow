import DatePicker from 'material-ui/DatePicker';
import React from 'react';
import { TableRowColumn } from 'material-ui/Table';
import TimePicker from 'material-ui/TimePicker';
import Timestamp from 'react-timestamp';

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const InterviewColumnEdit = React.createClass({
  handleChangeDate(_date, newDate) {
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    const addDate = `${monthNames[month]} ${day} ${year}`;

    this.props.updateInterviewStep(addDate, 'date', this.props.name);
  },

  handleChangeTime(_time, newTime) {
    const hour = newTime.getHours();
    const min = newTime.getMinutes();
    const sec = newTime.getSeconds();

    const addTime = `${hour}:${min}:${sec}`;

    this.props.updateInterviewStep(addTime, 'time', this.props.name);
  },

  render() {
    const job = this.props.job;
    const name = this.props.name;
    let interviewDate = 'Add Date';
    let interviewTime = 'Add Time';

    if (job[this.props.name].date) {
      interviewDate = <Timestamp format="date" time={job[name].date} />;
      interviewTime = <Timestamp format="time" time={job[name].date} />;
    }

    return <TableRowColumn>
      <DatePicker
        formatDate={this.formatDate}
        hintText={interviewDate}
        mode="landscape"
        onChange={this.handleChangeDate}
      />
      <br />
      <TimePicker
        hintText={interviewTime}
        onChange={this.handleChangeTime}
      />
    </TableRowColumn>;
  }
});

export default InterviewColumnEdit;
