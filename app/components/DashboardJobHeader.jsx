import { CardHeader } from 'material-ui/Card';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const DashboardJobHeader = React.createClass({
  handleTouchTap() {
    this.props.onHandleEditing(this.props.job, this.props.id);
  },

  render() {
    const job = this.props.job;
    const styles = this.props.styles;

    return <div>
      <CardHeader
        style={styles.cardHeader}
        subtitle={job.title}
        subtitleStyle={styles.subtitle}
        title={job.companyName}
        titleStyle={styles.title}
      >
      <a
        href={job.jobPostUrl}
        style={{ left: '15px', position: 'absolute', top: '92px' }}
      >
        {job.jobPostUrl}
      </a>
      <FlatButton
        icon={<EditMode />}
        label="Edit"
        onTouchTap={this.handleTouchTap}
        primary={true}
        style={{ position: 'absolute', right: '17%' }}
      />
      </CardHeader>
    </div>
  }
});

export default DashboardJobHeader;
