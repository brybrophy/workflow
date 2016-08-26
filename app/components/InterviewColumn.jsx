import React from 'react';
import { TableRowColumn } from 'material-ui/Table';
import Timestamp from 'react-timestamp';

const InterviewColumn  = React.createClass({
  render() {
    const job = this.props.job;
    const name = this.props.name;
    let interviewDate = '';
    let interviewTime = '';
    if (job[name]['date']) {
      interviewDate = <Timestamp time={job[name]['date']} format="date" />;
      interviewTime = <Timestamp time={job[name]['date']} format="time" />;
    }

    return <TableRowColumn>
      {interviewDate}<br />{interviewTime}
    </TableRowColumn>
  }
});

export default InterviewColumn;
