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
import Paper from 'material-ui/Paper';
import React from 'react';
import Timestamp from 'react-timestamp';
import TimePicker from 'material-ui/TimePicker';

const monthNames = [
  "Jan", "Feb", "Mar",
  "April", "May", "June", "July",
  "Aug", "Sept", "Oct",
  "Nov", "Dec"
];

const JobProgressTableEdit = React.createClass({
  handleTouchTap() {
    this.props.handleEditing(null, null)
  },

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const formatted =  `${day} ${monthNames[month]} ${year}`;
    return formatted;
  },

  render() {
    const styles = this.props.styles;
    const job = this.props.job;

    let dateApplied = '';
    let timeApplied = '';

    let dateInformational = '';
    let timeInformational = '';

    let datePhone = '';
    let timePhone = '';

    let dateTakeHome = '';
    let timeTakeHome = '';

    let dateTechnical = '';
    let timeTechnical = '';

    let dateOnsite = '';
    let timeOnsite = '';

    let dateOffer = '';
    let timeOffer = '';

    if (job.interviewApplied.date) {
      dateApplied = <Timestamp time={job.interviewInformational.date} format="date" />;
      timeApplied = <Timestamp time={job.interviewInformational.date} format="time" />;
    }

    if (job.interviewInformational.date) {
      dateInformational = <Timestamp time={job.interviewInformational.date} format="date" />;
      timeInformational = <Timestamp time={job.interviewInformational.date} format="time" />;
    }

    if (job.interviewPhone.date) {
      datePhone = <Timestamp time={job.interviewPhone.date} format="date" />;
      timePhone = <Timestamp time={job.interviewPhone.date} format="time" />;
    }

    if (job.interviewTakeHome.date) {
      dateTakeHome = <Timestamp time={job.interviewTakeHome.date} format="date" />;
      timeTakeHome = <Timestamp time={job.interviewTakeHome.date} format="time" />;
    }


    if (job.interviewTechnical.date) {
      dateTechnical = <Timestamp time={job.interviewTechnical.date} format="date" />;
      timeTechnical = <Timestamp time={job.interviewTechnical.date} format="time" />;
    }

    if (job.interviewOnsite.date) {
      dateOnsite = <Timestamp time={job.interviewOnsite.date} format="date" />;
      timeOnsite = <Timestamp time={job.interviewOnsite.date} format="time" />;
    }

    if (job.interviewOffer.date) {
      dateOffer = <Timestamp time={job.interviewOffer.date} format="date" />;
      timeOffer = <Timestamp time={job.interviewOffer.date} format="time" />;
    }

    return <div>
    <h4 style={{display: 'inline-block'}}>Progress</h4>
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
    <Table style={styles.table} selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>APPLIED</TableHeaderColumn>
          <TableHeaderColumn>INFOMATIONAL</TableHeaderColumn>
          <TableHeaderColumn>PHONE SCREEN</TableHeaderColumn>
          <TableHeaderColumn>TAKE HOME</TableHeaderColumn>
          <TableHeaderColumn>TECHNICAL</TableHeaderColumn>
          <TableHeaderColumn>ON SITE</TableHeaderColumn>
          <TableHeaderColumn>OFFER RECIEVED</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>
            <DatePicker
              formatDate={this.formatDate}
              hintText={dateApplied}
              mode="landscape"
            />
            <br />
            <TimePicker hintText={timeApplied} />
          </TableRowColumn>

          <TableRowColumn>
            <DatePicker
              formatDate={this.formatDate}
              hintText={dateInformational}
              mode="landscape"
            />
            <br />
            <TimePicker hintText={timeInformational} />
          </TableRowColumn>

          <TableRowColumn>
            <DatePicker
              formatDate={this.formatDate}
              hintText={datePhone}
              mode="landscape"
            />
            <br />
            <TimePicker hintText={timePhone} />
          </TableRowColumn>

          <TableRowColumn>
            <DatePicker
              formatDate={this.formatDate}
              hintText={dateTakeHome}
              mode="landscape"
            />
            <br />
            <TimePicker hintText={timeTakeHome} />
          </TableRowColumn>

          <TableRowColumn>
            <DatePicker
              formatDate={this.formatDate}
              hintText={dateTechnical}
              mode="landscape"
            />
            <br />
            <TimePicker hintText={timeTechnical} />
          </TableRowColumn>

          <TableRowColumn>
            <DatePicker
              formatDate={this.formatDate}
              hintText={dateOnsite}
              mode="landscape"
            />
            <br />
            <TimePicker hintText={timeOnsite} />
          </TableRowColumn>

          <TableRowColumn>
            <DatePicker
              formatDate={this.formatDate}
              hintText={dateOffer}
              mode="landscape"
            />
            <br />
            <TimePicker hintText={timeOffer} />
          </TableRowColumn>

        </TableRow>
      </TableBody>
    </Table>
    </Paper>
    </div>
  }
});

export default JobProgressTableEdit;
