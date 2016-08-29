import { CardHeader } from 'material-ui/Card';
import Check from 'material-ui/svg-icons/navigation/check';
import Clear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const DashboardJobHeaderEdit = React.createClass({
  getInitialState() {
    return {
      job: this.props.job
    };
  },

  handleChange(event) {
    const nextJob = Object.assign({}, this.state.job, {
      [event.target.name]: event.target.value
    });

    this.setState({ job: nextJob });
  },

  handleTouchTap() {
    this.props.onHandleEditing(null, null);
  },

  handleSaveTouchTap() {
    this.props.onHandleEditing(null, null);
    this.props.onHandleSaveJob(this.state.job);
  },

  render() {
    const job = this.props.job;
    const styles = this.props.styles;

    const stylesThis = {
      companyNameField: {
        fontSize: '3rem'
      },
      urlField: {
        left: '15px',
        position: 'absolute',
        top: '105px',
        width: '80%'
      }
    };

    return <div>
      <CardHeader
        style={styles.cardHeader}
        subtitle={
          <TextField
            defaultValue={job.title}
            hintText="Job title"
            name="title"
            onChange={this.handleChange}
          />
        }
        subtitleStyle={styles.subtitle}
        title={
          <TextField
            defaultValue={job.companyName}
            hintText="Company Name"
            inputStyle={stylesThis.companyNameField}
            name="companyName"
            onChange={this.handleChange}
          />
        }
        titleStyle={styles.title}
      >
        <TextField
          defaultValue={job.jobPostUrl}
          hintText="Job Post Url"
          name="jopPostUrl"
          onChange={this.handleChange}
          style={stylesThis.urlField}
        />
        <FlatButton
          icon={<Check />}
          label="Save"
          onTouchTap={this.handleSaveTouchTap}
          primary={true}
          style={{ position: 'absolute', right: '17%' }}
        />
        <FlatButton
          icon={<Clear />}
          label="Cancel"
          onTouchTap={this.handleTouchTap}
          secondary={true}
          style={{ position: 'absolute', right: '25%' }}
        />
      </CardHeader>
    </div>;
  }
});

export default DashboardJobHeaderEdit;
