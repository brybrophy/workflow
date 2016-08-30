import {
  Card,
  CardActions,
  CardText,
  CardTitle } from 'material-ui/Card';

import Close from 'material-ui/svg-icons/navigation/close';
import { Col } from 'react-bootstrap';
import DashboardJobHeader from 'components/DashboardJobHeader';
import DashboardJobHeaderEdit from 'components/DashboardJobHeaderEdit';
import DeleteButton from 'components/DeleteButton';
import Eyeball from 'material-ui/svg-icons/image/remove-red-eye';
import FlatButton from 'material-ui/FlatButton';
import JobAddressTable from 'components/JobAddressTable';
import JobAddressTableEdit from 'components/JobAddressTableEdit';
import JobContactsList from 'components/JobContactsList';
import JobMap from 'components/JobMap';
import JobNotesDashboard from 'components/JobNotesDashboard';
import JobNotesDashboardEdit from 'components/JobNotesDashboardEdit';
import JobProgressTable from 'components/JobProgressTable';
import JobProgressTableEdit from 'components/JobProgressTableEdit';
import ProgressStepper from 'components/ProgressStepper';
import React from 'react';

import axios from 'axios';
import weakKey from 'weak-key';
import { withRouter } from 'react-router';

const DashboardJob = React.createClass({
  getInitialState() {
    return {
      editing: null,
      editingId: null,
      expanded: null
    };
  },

  handleDeleteJob(deleteJob) {
    const id = deleteJob.id;

    this.props.saveJob(deleteJob);
    axios.delete(`/api/jobs/${id}`)
      .then((_res) => {
        const nextSnackbar = {
          message: 'Job Deleted',
          open: true
        };

        this.props.showSnackbar(nextSnackbar);
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Could not delete job. Try again.',
          open: true
        };

        this.props.showSnackbar(nextSnackbar);
      });
  },

  handleEditing(job, id) {
    this.setState({ editing: job, editingId: id });
  },

  handleExpand(event) {
    const id = Number.parseInt(event.currentTarget.id);

    this.setState({ expanded: id });
  },

  handleReduce() {
    this.setState({ expanded: false });
  },

  handleSaveJob(nextJob) {
    const id = nextJob.id;

    this.props.saveJob(nextJob);
    axios.patch(`/api/jobs/${id}`, nextJob)
      .then((_res) => {
        const nextSnackbar = {
          message: 'Update sucessful',
          open: true
        };

        this.props.showSnackbar(nextSnackbar);
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Update unsuccessful. Try again.',
          open: true
        };

        this.props.showSnackbar(nextSnackbar);
      });
  },

  handleTouchTap() {
    this.handleEditing(this.props.job, this.props.id);
  },

  render() {
    const { contacts, jobs } = this.props;

    if (jobs.length > 1) {
      jobs.sort((p1, p2) => p1.companyName > p2.companyName);
    }

    const styles = {
      cardHeader: {
        paddingBottom: '0px'
      },
      cardText: {
        color: '#A6A399',
        padding: '16px 0'
      },
      cardTitle: {
        backgroundColor: '#327F9E'
      },
      column: {
        padding: '20px 40px 0 10px'
      },
      deleteButton: {
        bottom: '105px',
        float: 'right',
        position: 'relative'
      },
      job: {
        backgroundColor: '#F9F8F7',
        borderRadius: '3px',
        color: '#A6A399',
        marginBottom: '10px',
        padding: '10px 20px 50px 20px'
      },
      paragraph: {
        color: 'black',
        fontFamily: 'MontserratLight',
        position: 'relative',
        top: '5px'
      },
      paper: {
        padding: '10px'
      },
      section: {
        backgroundColor: 'white',
        borderRadius: '5px',
        marginBottom: '10px',
        padding: '10px'
      },
      subtitle: {
        fontSize: '1.6rem'
      },
      table: {
        marginBottom: '20px'
      },
      title: {
        fontSize: '3.2rem'
      },
      viewMoreButton: {
        bottom: '75px',
        float: 'right',
        position: 'relative'
      }
    };

    return <Col md={9} style={styles.column} xs={12}>
      {jobs.map((job) => {
        return <Card
          expanded={this.state.expanded === job.id}
          key={weakKey(job)}
          style={styles.job}
        >

        {(this.state.editing === job && this.state.editingId === 0)
          ? // eslint-disable-line operator-linebreak
          <div>
            <DashboardJobHeaderEdit
              job={job}
              onHandleEditing={this.handleEditing}
              onHandleSaveJob={this.handleSaveJob}
              styles={styles}
            />
            <DeleteButton
              job={job}
              onHandleDeleteJob={this.handleDeleteJob}
              styles={styles}
            />
          </div>
          : // eslint-disable-line operator-linebreak
          <div>
            <DashboardJobHeader
              id={0}
              job={job}
              onHandleEditing={this.handleEditing}
              styles={styles}
            />
            <CardActions>
              <FlatButton
                backgroundColor="#327F9E"
                icon={<Eyeball />}
                id={job.id}
                label="View More"
                onTouchTap={this.handleExpand}
                style={styles.viewMoreButton}
              />
            </CardActions>
          </div>
        }
          {/* <ProgressStepper /> */}
          <CardTitle expandable={true} style={styles.CardTitle} />
          <CardText expandable={true} style={styles.cardText}>

          {(this.state.editing === job && this.state.editingId === 1)
            ? // eslint-disable-line operator-linebreak
            <JobAddressTableEdit
              job={job}
              onHandleEditing={this.handleEditing}
              onHandleSaveJob={this.handleSaveJob}
              styles={styles}
            />
            : // eslint-disable-line operator-linebreak
            <JobAddressTable
              id={1}
              job={job}
              onHandleEditing={this.handleEditing}
              styles={styles}
            />
          }

            <JobMap

              // eslint-disable-next-line max-len
              address={`${job.companyStreetAddress} ${job.companyCity} ${job.companyState} ${job.companyZip}`}
            />

          {(this.state.editing === job && this.state.editingId === 2)
            ? // eslint-disable-line operator-linebreak
            <JobProgressTableEdit
              job={job}
              onHandleEditing={this.handleEditing}
              onHandleSaveJob={this.handleSaveJob}
              styles={styles}
            />
            : // eslint-disable-line operator-linebreak
            <JobProgressTable
              id={2}
              job={job}
              onHandleEditing={this.handleEditing}
              styles={styles}
            />
          }

            <JobContactsList
              contacts={contacts}
              editing={this.state.editing}
              editingId={this.state.editingId}
              job={job}
              onHandleEditing={this.handleEditing}
              styles={styles}
            />

            {(this.state.editing === job && this.state.editingId === 4)
              ? // eslint-disable-line operator-linebreak
              <JobNotesDashboardEdit
                job={job}
                onHandleEditing={this.handleEditing}
                onHandleSaveJob={this.handleSaveJob}
                styles={styles}
              />
              : // eslint-disable-line operator-linebreak
              <JobNotesDashboard
                id={4}
                job={job}
                onHandleEditing={this.handleEditing}
                styles={styles}
              />
            }
          </CardText>
          <CardActions expandable={true} style={{ marginBottom: '25px' }}>
            <FlatButton
              icon={<Close />}
              label="Close"
              onTouchTap={this.handleReduce}
              primary={true}
              style={{ float: 'right' }}
            />
          </CardActions>
        </Card>;
      })}
    </Col>;
  }
});

export default withRouter(DashboardJob);
