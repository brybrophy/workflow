import { Link, withRouter } from 'react-router';
import { Tab, Tabs } from 'material-ui/Tabs';
import ContactView from 'components/ContactView';
import DeleteDialog from 'components/DeleteDialog';
import JobForm from 'components/JobForm';
import JobNotes from 'components/JobNotes';
import JobProgressView from 'components/JobProgressView';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import SwipeableViews from 'react-swipeable-views';
import axios from 'axios';

const JobSubNav = React.createClass({
  getInitialState() {
    return {
      contactEditing: [],
      contacts: [],

      deleteDialog: {
        open: false,
        contact: null
      },

      job: {},
      slideIndex: 0,

      snackbar: {
        message: '',
        open: false
      }
    };
  },

  // componentWillUnmount() {
  // axios.post('/api/contacts', nextContact)
  //   .then((res) => {
  //
  //   })
  //   .catch(() => {
  //     const nextSnackbar = {
  //       message: 'Unable to save contact',
  //       open: true
  //     };
  //
  //     this.setState({ snackbar: nextSnackbar });
  //   });
  // },

  handleRequestCloseSnackbar() {
    const nextSnackbar = { message: '', open: false };

    this.setState({ snackbar: nextSnackbar });
  },

  closeDeleteDialog() {
    const nextDeleteDialog = { open: false, post: null };

    this.setState({ deleteDialog: nextDeleteDialog });
  },

  createContact() {
    const contact = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: '',
      company: '',
      linkedInUrl: ''
    };

    const nextEditing = this.state.contactEditing.concat(contact);
    const nextContacts = [contact].concat(this.state.contacts);

    this.setState({  contactEditing: nextEditing, contacts: nextContacts });
  },

  deleteContact(contact) {
    const nextContacts = this.state.contacts.filter((element) => {
      return contact !== element;
    });
    const nextDeleteDialog = { open: false, post: null };

    this.setState({ deleteDialog: nextDeleteDialog, contacts: nextContacts });
  },

  openDeleteDialog(contact) {
    const nextDeleteDialog = { open: true, contact };

    this.setState({ deleteDialog: nextDeleteDialog });
  },

  startEditingContact(contact) {
    const nextEditing = this.state.contactEditing.concat(contact);

    this.setState({ contactEditing: nextEditing });
  },

  stopEditingContact(contact) {
    const nextEditing = this.state.contactEditing.filter((el) => {
      return contact !== el;
    });

    let nextContacts = this.state.contacts;

    // if (!Number.isFinite(contact.votes)) {
    //   nextcontacts = this.state.contacts.filter((el) => contact !== el);
    // }

    this.setState({ contactEditing: nextEditing, contacts: nextContacts });
  },

  updateContact(contact, nextContact) {
    const nextEditing = this.state.contactEditing.filter((el) => {
      return contact !== el;
    });

    const nextContacts = this.state.contacts.map((element) => {
      if (contact !== element) {
        return element;
      }

      return nextContact;
    });

    this.setState({ contactEditing: nextEditing, contacts: nextContacts });
  },

  handleChange(value) {
    this.setState({ slideIndex: value });
  },

  updateJob(nextJob) {
    this.setState({ job: nextJob, slideIndex: 1 });
  },

  updateNotes(nextNotes) {
    const nextJob = Object.assign({}, this.state.job, { notes: nextNotes });

    this.setState({ job: nextJob });
  },

  render() {
    const styles = {
      tab: {
        color: 'black',
        fontFamily: 'MontserratLight'
      },
      tabs: {
        margin: '20px auto',
        width: '50%'
      }
    };

    return <div>
      <DeleteDialog
        closeDeleteDialog={this.closeDeleteDialog}
        deleteContact={this.deleteContact}
        deleteDialog={this.state.deleteDialog}
      />

      <Snackbar
        autoHideDuration={3000}
        message={this.state.snackbar.message}
        onRequestClose={this.handleRequestCloseSnackbar}
        open={this.state.snackbar.open}
      />

      <Tabs
        inkBarStyle={{ backgroundColor: '#47B4E0' }}
        style={styles.tabs}
        tabItemContainerStyle={{ backgroundColor: 'none' }}
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab
          label="Job"
          style={styles.tab}
          value={0}
        />
        <Tab
          label="Contacts"
          style={styles.tab}
          value={1}
        />
        <Tab
          label="Progress"
          style={styles.tab}
          value={2}
        />
        <Tab
          label="Notes"
          style={styles.tab}
          value={3}
        />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <JobForm updateJob={this.updateJob} />
        <ContactView
          contacts={this.state.contacts}
          createContact={this.createContact}
          editing={this.state.contactEditing}
          openDeleteDialog={this.openDeleteDialog}
          startEditingContact={this.startEditingContact}
          stopEditingContact={this.stopEditingContact}
          updateContact={this.updateContact}
        />
        <JobProgressView job={this.state.job} />
        <JobNotes job={this.state.job} updateNotes={this.updateNotes} />
      </SwipeableViews>
    </div>;
  }
});

export default withRouter(JobSubNav);
