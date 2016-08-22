import { Tab, Tabs } from 'material-ui/Tabs';
import React from 'react';

const JobSubNav = React.createClass({
  render() {
    const styleTab = {
      color: 'black',
      fontFamily: 'MontserratLight'
    }

    return <div><Tabs
      inkBarStyle={{ backgroundColor: '#47B4E0' }}
      style={{ margin: '0 auto', width: '50%' }}
      tabItemContainerStyle={{ backgroundColor: 'none' }}
    >
      <Tab label="Job" style={styleTab} />
      <Tab label="Contacts" style={styleTab} />
      <Tab label="Progress" style={styleTab} />
      <Tab label="Notes" style={styleTab} />
    </Tabs>{this.props.children}</div>;
  }
});

export default JobSubNav;
