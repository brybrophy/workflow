import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobContactsList = React.createClass({
  render() {
    const styles = this.props.styles;

    return <div>
      <h4 style={{display: 'inline-block'}}>Contacts</h4>
      <FlatButton
        icon={<EditMode />}
        label="Edit"
        primary={true}
        style={{float: 'right'}}
      />
      <Paper style={styles.section}>
      <List>
        <ListItem
          primaryText="Bobby Kennedy"
          leftAvatar={<Avatar src="http://www.fillmurray.com/100/100" />}
        />
        <ListItem
          primaryText="Neil Armstrong"
          leftAvatar={<Avatar src="http://www.fillmurray.com/200/200" />}
        />
      </List>
      </Paper>
    </div>
  }
});

export default JobContactsList;
