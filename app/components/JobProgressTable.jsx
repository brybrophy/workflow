import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import Timestamp from 'react-timestamp';

const JobProgressTable = React.createClass({
  handleTouchTap() {
    this.props.handleEditing(this.props.job, this.props.id)
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
      icon={<EditMode />}
      label="Edit"
      onTouchTap={this.handleTouchTap}
      primary={true}
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
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        <TableRow>
          <TableRowColumn>
            {dateApplied}<br />{timeApplied}
          </TableRowColumn>
          <TableRowColumn>
            {dateInformational}<br />{timeInformational}
          </TableRowColumn>
          <TableRowColumn>
            {datePhone}<br />{timePhone}
          </TableRowColumn>
          <TableRowColumn>
            {dateTakeHome}<br />{timeTakeHome}
          </TableRowColumn>
          <TableRowColumn>
            {dateTechnical}<br />{timeTechnical}
          </TableRowColumn>
          <TableRowColumn>
            {dateOnsite}<br />{timeOnsite}
          </TableRowColumn>
          <TableRowColumn>
            {dateOffer}<br />{timeOffer}
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    </Paper>
    </div>
  }
});

export default JobProgressTable;
