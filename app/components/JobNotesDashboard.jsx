import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobNotesDashboard = React.createClass({
  render() {
    const job = this.props.job;
    const styles = this.props.styles;

    return <div>
      <h4 style={{display: 'inline-block'}}>Notes</h4>
      <FlatButton
        icon={<EditMode />}
        label="Edit"
        primary={true}
        style={{float: 'right'}}
      />
      <Paper style={styles.section}>
        <p style={styles.paragrapharagraph}>{job.notes}</p>
      </Paper>
    </div>
  }
});

export default JobNotesDashboard;
