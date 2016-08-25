import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';

import Close from 'material-ui/svg-icons/navigation/close';
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
import weakKey from 'weak-key';

const JobsJob = React.createClass({
  getInitialState() {
    return {
      editing: null,
      editingId: null,
      expanded: null
    }
  },

  handleEditing(job, id){
    this.setState({ editing: job, editingId: id });
  },

  handleExpand() {
    this.setState({expanded: true});
  },

  handleReduce() {
    this.setState({expanded: false});
  },

  render() {
    let { jobs } = this.props;

    jobs.sort((p1, p2) => p1.companyName > p2.companyName);
    const styles = {
      job: {
        backgroundColor: '#F9F8F7',
        borderRadius: '3px',
        color: '#A6A399',
        marginBottom: '10px',
        padding: '10px 20px'
      },
      p: {
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
      },
    };

    return <Col xs={12} md={9} style={{padding: '20px 40px 0 10px'}}>
      {jobs.map((job) => {
        return <Card
            key={weakKey(job)}
            expanded={this.state.expanded}
            style={styles.job}
          >
          <CardHeader
            title={job.companyName}
            titleStyle={styles.title}
            style={{paddingBottom: '0px'}}
            subtitle={job.title}
            subtitleStyle={styles.subtitle}
          >
          <CardActions>
          <FlatButton
          backgroundColor={'#327F9E'}
          icon={<Eyeball />}
          label="View More"
          style={{float: 'right', position: 'relative', bottom: '60px'}}
          onTouchTap={this.handleExpand}
          />
          </CardActions>
          </CardHeader>
          <ProgressStepper />
          <CardTitle style={{backgroundColor: '#327F9E'}} expandable={true} />
          <CardText expandable={true} style={{color: '#A6A399', padding: '16px 0'}}>

          {(this.state.editing === job && this.state.editingId === 1)
            ?
            <JobAddressTableEdit
              handleEditing={this.handleEditing}
              job={job}
              styles={styles}
            />
            :
            <JobAddressTable
              handleEditing={this.handleEditing}
              id={1}
              job={job}
              styles={styles}
            />
          }

          {(this.state.editing === job && this.state.editingId === 2)
            ?
            <JobProgressTableEdit
              handleEditing={this.handleEditing}
              job={job}
              styles={styles}
            />
            :
            <JobProgressTable
              handleEditing={this.handleEditing}
              id={2}
              job={job}
              styles={styles}
            />
          }

            <JobContactsList job={job} styles={styles}/>
            <JobNotesDashboard job={job} styles={styles}/>
          </CardText>
          <CardActions expandable={true} style={{marginBottom: '25px'}}>
            <FlatButton
              icon={<Close />}
              label="Close"
              primary={true}
              style={{float: 'right'}}
              onTouchTap={this.handleReduce}
            />
          </CardActions>
        </Card>
      })}
    </Col>

  }
});

export default withRouter(JobsJob);
