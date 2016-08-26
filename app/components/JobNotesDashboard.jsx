import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobNotesDashboard = React.createClass({
  handleTouchTap() {
    this.props.onHandleEditing(this.props.job, this.props.id)
  },
  
  render() {
    const job = this.props.job;
    const styles = this.props.styles;

    return <div>
      <h4 style={{display: 'inline-block'}}>Notes</h4>
      <FlatButton
        icon={<EditMode />}
        label="Edit"
        onTouchTap={this.handleTouchTap}
        primary={true}
        style={{float: 'right'}}
      />
      <Paper style={styles.section}>
        <p style={styles.paragraph}>{job.notes}</p>
      </Paper>
    </div>
  }
});

export default JobNotesDashboard;
