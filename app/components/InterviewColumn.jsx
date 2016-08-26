import DatePicker from 'material-ui/DatePicker';
import React from 'react';
import { TableRowColumn } from 'material-ui/Table';
import TimePicker from 'material-ui/TimePicker';
import Timestamp from 'react-timestamp';

const monthNames = [
  "Jan", "Feb", "Mar",
  "April", "May", "June", "July",
  "Aug", "Sept", "Oct",
  "Nov", "Dec"
];

const InterviewColumn  = React.createClass({
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

    const addTime = `${hour}:${min}:${sec}`

    this.props.updateInterviewStep(addTime, 'time', this.props.name);
  },

  render() {
    const job = this.props.job;
    const name = this.props.name;
    console.log(name);
    let dateInformational = 'Add Date';
    let timeInformational = 'Add Time';
    if (job[this.props.name]['date']) {
      dateInformational = <Timestamp time={job[name]['date']} format="date" />;
      timeInformational = <Timestamp time={job[name]['date']} format="time" />;
    }

    return <TableRowColumn>
      <DatePicker
        formatDate={this.formatDate}
        hintText={dateInformational}
        mode="landscape"
        onChange={this.handleChangeDate}
      />
      <br />
      <TimePicker
        hintText={timeInformational}
        onChange={this.handleChangeTime}
      />
    </TableRowColumn>
  }
});

export default InterviewColumn;
