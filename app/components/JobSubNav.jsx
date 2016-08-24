import { Tab, Tabs } from 'material-ui/Tabs';
import { Link, withRouter } from 'react-router';
import axios from 'axios';
import ContactView from 'components/ContactView';
import JobInfo from 'components/JobInfo';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SwipeableViews from 'react-swipeable-views';

const JobSubNav = React.createClass({
  getInitialState() {
    return {
      job: {},
      contacts: [],
      editing: null,
      slideIndex: 0
    };
  },

  componentWillMount() {
    axios.get(`/api/jobs/${this.props.params.id}`)
      .then((res) => {
        this.setState({ job: res.data });
      })
      .catch((err) => {
        console.error(err);
      });

    axios.get(`/api/jobs/${this.props.params.id}/contacts`)
      .then((res) => {
        this.setState({ contacts: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  // handleActiveTab(event) {
  //   this.props.router.push(`/job/${this.state.job.id}/${event.props.value}`);
  // },

  handleChange(value) {
    this.setState({ slideIndex: value });
  },

  updateContacts(nextEditing, nextContacts) {
    this.setState({ contacts: nextContacts, editing: nextEditing });
  },

  render() {
    const styleTab = {
      color: 'black',
      fontFamily: 'MontserratLight'
    }

    const styleTabs = {
      margin: '20px auto',
      width: '50%'
    };

    return <div>
      <Tabs
        inkBarStyle={{ backgroundColor: '#47B4E0' }}
        style={styleTabs}
        tabItemContainerStyle={{ backgroundColor: 'none' }}
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab
          label="Job"
          // onActive={this.handleActiveTab}
          style={styleTab}
          value={0}
        />
        <Tab
          label="Contacts"
          // onActive={this.handleActiveTab}
          style={styleTab}
          value={1}
        />
        <Tab
          label="Progress"
          // onActive={this.handleActiveTab}
          style={styleTab}
          value={2}
        />
        <Tab
          label="Notes"
          // onActive={this.handleActiveTab}
          style={styleTab}
          value={3}
        />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <JobInfo job={this.state.job} />
        <ContactView
          contacts={this.state.contacts}
          editing={this.state.editing}
          updateContacts={this.state.updateContacts}
        />
        <div>
          slide n°3
        </div>
      </SwipeableViews>

        {/* {React.cloneElement(this.props.children, {
          job: this.state.job,
          contacts: this.state.contacts,
          editing: this.state.editing,
          key: Math.random(),
          updateContacts: this.updateContacts
        })} */}
    </div>;
  }
});

export default withRouter(JobSubNav);
