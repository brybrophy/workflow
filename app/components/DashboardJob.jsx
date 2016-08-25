import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardTitle } from 'material-ui/Card';

import Close from 'material-ui/svg-icons/navigation/close';
import { Col } from 'react-bootstrap';
import Eyeball from 'material-ui/svg-icons/image/remove-red-eye';
import FlatButton from 'material-ui/FlatButton';
import JobAddressTable from 'components/JobAddressTable';
import JobAddressTableEdit from 'components/JobAddressTableEdit';
import JobContactsList from 'components/JobContactsList';
import JobNotesDashboard from 'components/JobNotesDashboard';
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

  handleSaveJob(job) {
    const id = job.id;

    this.props.saveJob(job);
    axios.patch(`/api/jobs/${id}`, job)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    const { jobs } = this.props;
    jobs.sort((p1, p2) => p1.companyName > p2.companyName);

    const styles = {
      job: {
        backgroundColor: '#F9F8F7',
        borderRadius: '3px',
        color: '#A6A399',
        marginBottom: '10px',
        padding: '10px 20px'
      },
      paragraph: {
        color: 'black',
        fontFamily: 'MontserratLight'
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
      }
    };

    return <Col md={9} style={{ padding: '20px 40px 0 10px' }} xs={12}>
      {jobs.map((job) => {
        return <Card
          expanded={this.state.expanded === job.id}
          key={weakKey(job)}
          style={styles.job}
        >
          <CardHeader
            style={{ paddingBottom: '0px' }}
            subtitle={job.title}
            subtitleStyle={styles.subtitle}
            title={job.companyName}
            titleStyle={styles.title}
          >
            <CardActions>
              <FlatButton
                backgroundColor={'#327F9E'}
                icon={<Eyeball />}
                id={job.id}
                label="View More"
                onTouchTap={this.handleExpand}
                style={{ float: 'right', position: 'relative', bottom: '60px' }}
              />
            </CardActions>
          </CardHeader>
          <ProgressStepper />
          <CardTitle expandable={true} style={{ backgroundColor: '#327F9E' }} />
          <CardText
            expandable={true}
            style={{ color: '#A6A399', padding: '16px 0' }}
          >

          {(this.state.editing === job && this.state.editingId === 1)
            ?
            <JobAddressTableEdit
              job={job}
              onHandleEditing={this.handleEditing}
              onHandleSaveJob={this.handleSaveJob}
              styles={styles}
            />
            :
            <JobAddressTable
              id={1}
              job={job}
              onHandleEditing={this.handleEditing}
              styles={styles}
            />
          }

          {(this.state.editing === job && this.state.editingId === 2)
            ?
            <JobProgressTableEdit
              job={job}
              onHandleEditing={this.handleEditing}
              onHandleSaveJob={this.handleSaveJob}
              styles={styles}
            />
            :
            <JobProgressTable
              id={2}
              job={job}
              onHandleEditing={this.handleEditing}
              styles={styles}
            />
          }

            <JobContactsList job={job} styles={styles} />
            <JobNotesDashboard job={job} styles={styles} />
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
