import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobContactsList = React.createClass({
  handleTouchTap() {
    this.props.onHandleEditing(this.props.job, this.props.id)
  },

  render() {
    const styles = this.props.styles;

    const deleteButton = () => {
      if (this.props.editing && this.props.editingId) {
        return <IconButton
          iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
          tooltipPosition="bottom-right"
        />;
      }

      return null;
    }

    return <div>
      <h4 style={{display: 'inline-block'}}>Contacts</h4>
      <FlatButton
        icon={<EditMode />}
        label="Edit"
        onTouchTap={this.handleTouchTap}
        primary={true}
        style={{float: 'right'}}
      />
      <Paper style={styles.section}>
      <List>
        <ListItem
          leftAvatar={<Avatar src="http://www.fillmurray.com/100/100" />}
          primaryText="Bobby Kennedy"
          rightIcon={deleteButton()}
        />
        <ListItem
          leftAvatar={<Avatar src="http://www.fillmurray.com/200/200" />}
          primaryText="Neil Armstrong"
        />
      </List>
      </Paper>
    </div>
  }
});

export default JobContactsList;
