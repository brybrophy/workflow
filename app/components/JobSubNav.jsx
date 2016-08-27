import { Link, withRouter } from 'react-router';
import { Tab, Tabs } from 'material-ui/Tabs';
import ContactView from 'components/ContactView';
import DeleteDialog from 'components/DeleteDialog';
import JobForm from 'components/JobForm';
import JobNotes from 'components/JobNotes';
import JobProgressView from 'components/JobProgressView';
import React from 'react';
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

      job: {
        companyName: '',
        title: '',
        companyStreetAddress: '',
        companyCity: '',
        companyState: '',
        companyZip: '',
        companyPhone: '',
        jobPostUrl: '',
        notes: '',
        interviewApplied: { date: '' },
        interviewInformational: { date: '' },
        interviewPhone: { date: '' },
        interviewTakeHome: { date: '' },
        interviewTechnical: { date: '' },
        interviewOnsite: { date: '' },
        interviewOffer: { date: '' },
        interviewRejected: { date: '' }
      },

      slideIndex: 0
    };
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

    if (!contact.firstName) {
      nextContacts = this.state.contacts.filter((el) => contact !== el);
    }

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

  updateInterviewStep(data, type, name) {
    const nextJob = Object.assign({}, this.state.job);

    nextJob[name][type] = data;

    this.setState({ job: nextJob });
  },

  updateInterviewSteps() {
    const interviewSteps = [
      'interviewApplied',
      'interviewInformational',
      'interviewPhone',
      'interviewTakeHome',
      'interviewTechnical',
      'interviewOnsite',
      'interviewOffer'
    ];

    const nextJob = Object.assign({}, this.state.job);

    for (const step of interviewSteps) {
      if (nextJob[step]['date'] && nextJob[step]['time']) {
        const date = nextJob[step]['date'];
        const time = nextJob[step]['time'];

        const nextInterview = new Date(`${date} ${time}`);

        nextJob[step]['date'] = nextInterview;
        nextJob[step]['time'] = '';
      }
    }

    axios.patch(`/api/jobs/${this.state.job.id}`, nextJob)
      .then((res) => {
        this.setState({ job: nextJob, slideIndex: 3 });
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Unable to save interview progress',
          open: true
        };

        this.props.showSnackbar(nextSnackbar);
      });
  },

  saveContacts(nextContacts) {
    if (nextContacts.length === 0) {
      return this.setState({ slideIndex: 2 });
    }

    const axiosCalls = [];

    for (const contact of nextContacts) {
      axiosCalls.push(axios.post('/api/contacts', contact).then((res) => {
        return axios.post(`/api/jobs/${this.state.job.id}/contacts`, {
           contactId: res.data.id
        });
      }));
    }

    axios.all(axiosCalls)
      .then((res) => {
        const additionalContactInfo = res.map((element) => {
          return element.data;
        });

        const newContacts = Object.assign({}, nextContacts, additionalContactInfo);

        this.setState({ contacts: nextContacts, slideIndex: 2 });
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Unable to save contacts',
          open: true
        };

        this.props.showSnackbar(nextSnackbar);
      });
  },

  saveNotes() {
    axios.patch(`/api/jobs/${this.state.job.id}`, this.state.job)
      .then((res) => {
        this.props.router.push('/dashboard');
        this.props.addNewJob(this.state.job);
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Unable to save notes',
          open: true
        };

        this.props.showSnackbar(nextSnackbar);
      });
  },

  handleChange(value) {
    if (this.state.job.companyName && this.state.job.title) {
      return this.setState({ slideIndex: value });
    }
    const nextSnackbar = {
      message: 'You must first add a job',
      open: true
    };

    this.props.showSnackbar(nextSnackbar);
    this.setState({ slideIndex: 0 });
  },

  updateJob(nextJob) {
    if (!this.state.job.id) {
      axios.post('/api/jobs', nextJob)
        .then((res) => {
          const nextJob = Object.assign({}, res.data);

          this.setState({ job: nextJob, slideIndex: 1 });
        })
        .catch((err) => {
          const nextSnackbar = {
            message: 'Unable to save job',
            open: true
          };

          this.props.showSnackbar(nextSnackbar);
        });
    }
    else {
      axios.patch(`/api/jobs/${this.state.job.id}`, nextJob)
        .then((res) => {
          const nextJob = Object.assign({}, res.data);

          this.setState({ job: nextJob, slideIndex: 1 });
        })
        .catch((err) => {
          const nextSnackbar = {
            message: 'Unable to save job',
            open: true
          };

          this.props.showSnackbar(nextSnackbar);
        });
    }
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
        style={{marginBottom: '90px'}}
      >
        <JobForm updateJob={this.updateJob} />
        <ContactView
          contacts={this.state.contacts}
          createContact={this.createContact}
          editing={this.state.contactEditing}
          job={this.state.job}
          openDeleteDialog={this.openDeleteDialog}
          saveContacts={this.saveContacts}
          startEditingContact={this.startEditingContact}
          stopEditingContact={this.stopEditingContact}
          updateContact={this.updateContact}
        />
        <JobProgressView
          job={this.state.job}
          updateInterviewStep={this.updateInterviewStep}
          updateInterviewSteps={this.updateInterviewSteps}
        />
        <JobNotes
          job={this.state.job}
          saveNotes={this.saveNotes}
          updateNotes={this.updateNotes}
        />
      </SwipeableViews>
    </div>;
  }
});

export default withRouter(JobSubNav);
