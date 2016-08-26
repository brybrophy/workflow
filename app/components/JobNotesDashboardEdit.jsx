import Check from 'material-ui/svg-icons/navigation/check';
import Clear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';

const JobNotesDashboardEdit = React.createClass({
  getInitialState() {
    return {
      job: this.props.job
    }
  },

  handleChange(event) {
    this.updateNotes(event.target.value);
  },

  updateNotes(nextNotes) {
    const nextJob = Object.assign({}, this.props.job, { notes: nextNotes });
    console.log(nextJob);

    this.setState({ job: nextJob });
  },

  render() {
    const job = this.props.job;
    const styles = this.props.styles;

    return <div>
      <h4 style={{display: 'inline-block'}}>Notes</h4>
      <FlatButton
        icon={<Check />}
        label="Save"
        onTouchTap={this.handleSaveTouchTap}
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
      <TextField
        fullWidth={true}
        hintText="Type job notes here"
        multiLine={true}
        name="notes"
        onChange={this.handleChange}
        style={{ fontFamily: 'MontserratLight' }}
        underlineShow={false}
        value={this.props.job.notes}
      />
      </Paper>
    </div>
  }
});

export default JobNotesDashboardEdit;
