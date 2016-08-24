import { Tab, Tabs } from 'material-ui/Tabs';
import { Link, withRouter } from 'react-router';
import axios from 'axios';
import ContactView from 'components/ContactView';
import JobInfo from 'components/JobInfo';
import JobNotes from 'components/JobNotes';
import JobProgressView from 'components/JobProgressView';
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

  componentWillUnmount() {
    const updatedJob = Object.assign({}, this.state.job);

    axios.patch(`/api/jobs/${this.state.job.id}`, updatedJob)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  handleChange(value) {
    this.setState({ slideIndex: value });
  },

  addNewContact(contact, newContact) {
    let nextContacts;

    axios.post('/api/contacts', newContact)
      .then((res) => {
        nextContacts = this.state.contacts.map((element) => {
          if (contact !== element) {
            return element;
          }
          console.log(res.data);
          return res.data;
        });

        return axios.post(`/api/jobs/${this.state.job.id}/contacts`, {
          contactId: res.data.id
        });
      })
      .then((res) => {
        this.setState({ editing: null, contacts: nextContacts });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  stopEditingContact(contact) {
    const nextContacts = this.state.contacts.filter((elem) => elem !== contact);

    this.setState({ editing: null, contacts: nextContacts });
  },

  updateContacts(nextEditing, nextContacts) {
    this.setState({ contacts: nextContacts, editing: nextEditing });
  },

  updateNotes(nextNotes) {
    const nextJob = Object.assign({}, this.state.job, { notes: nextNotes });

    this.setState({ job: nextJob });
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
          style={styleTab}
          value={0}
        />
        <Tab
          label="Contacts"
          style={styleTab}
          value={1}
        />
        <Tab
          label="Progress"
          style={styleTab}
          value={2}
        />
        <Tab
          label="Notes"
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
          addNewContact={this.addNewContact}
          contacts={this.state.contacts}
          editing={this.state.editing}
          updateContacts={this.updateContacts}
          stopEditingContact={this.stopEditingContact}
        />
        <JobProgressView job={this.state.job} />
        <JobNotes job={this.state.job} updateNotes={this.updateNotes} />
      </SwipeableViews>
    </div>;
  }
});

export default withRouter(JobSubNav);
