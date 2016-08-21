import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobsSideBar = React.createClass({
  render() {

    const styleSideMenu = {
      display: 'inline-block',
      width: '100%'
    }

    const styleFilter = {
      borderBottom: '1px solid #EAE3DC',
      color: '#EAE3DC',
      fontFamily: 'MontserratLight',
      width: '86%'
    }

    return <div>
    <Paper style={styleSideMenu}>
      <Menu>
        <MenuItem primaryText="Company Name" style={styleFilter} />
        <MenuItem primaryText="Job Title" style={styleFilter} />
        <MenuItem primaryText="Newest" style={styleFilter} />
        <MenuItem primaryText="Oldest" style={styleFilter} />
        <MenuItem primaryText="Most Progress" style={styleFilter} />
        <MenuItem primaryText="Least Progress" style={styleFilter} />
      </Menu>
    </Paper>
  </div>
  }
});

export default JobsSideBar;
