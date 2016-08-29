import { CardActions } from 'material-ui/Card';
import Delete from 'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const DeleteButton = React.createClass({
  handleTouchTap() {
    this.props.onHandleDeleteJob(this.props.job);
  },

  render() {
    const job = this.props.job;
    const styles = this.props.styles;

    return <CardActions>
      <FlatButton
        backgroundColor="#E48C8C"
        hoverColor="#ED4C4C"
        icon={<Delete />}
        id={job.id}
        label="Delete Job"
        onTouchTap={this.handleTouchTap}
        style={styles.deleteButton}
      />
    </CardActions>;
  }
});

export default DeleteButton;
