import { Grid, Row, Col } from 'react-bootstrap';
import Timestamp from 'react-timestamp';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import React from 'react';
import weakKey from 'weak-key';
import { withRouter } from 'react-router';

const JobsJob = React.createClass({
  handleTouchTap(event) {
    this.props.router.push(`/job/${event.target.id}`);
  },

  render() {
    let { jobs } = this.props;

    jobs.sort((p1, p2) => p1.companyName > p2.companyName);

    const styleColumnBorders = {
        borderRight: '1px solid #A6A399'
    };

    const styleDateText = {
      fontFamily: 'MontserratHairline',
      fontSize: '1.2rem',
    };

    const styleJob = {
      backgroundColor: '#E7E4DB',
      borderRadius: '3px',
      color: '#A6A399',
      marginBottom: '10px',
      padding: '10px 20px'
    };

    const styleProgress = {
      marginBottom: '30px'
    };

    const styleSudoColumnEven = {
      display: 'inline-block',
      paddingLeft: '20px',
      textAlign: 'center',
      width: '50%'
    };

    const styleSudoColumnOdd = {
      borderRight: '1px solid #A6A399',
      display: 'inline-block',
      paddingRight: '20px',
      textAlign: 'center',
      width: '50%'
    };

    const styleToggle = {
      block: {
        maxWidth: 150,
      },
      toggle: {
        marginBottom: 0,
      },
    };

    return <Col xs={12} md={9} style={{padding: '20px 40px 0 10px'}}>
      {jobs.map((job) => {
        let timeInformational = 'Not scheduled yet';
        let timePhone = 'Not scheduled yet';
        let timeOnSite = 'Not scheduled yet';
        let timeTechnical = 'Not scheduled yet';
        let timeOffer = 'Offer not recieved';

        if (job.interviewInformational.date) {
          <Timestamp time={job.interviewInformational.date} format="full" />;
        }

        if (job.interviewPhone) {
          <Timestamp time={job.interviewPhone} format="full" />;
        }

        if (job.interviewOnsite) {
          <Timestamp time={job.interviewOnsite} format="full" />;
        }

        if (job.interviewTechnical) {
          <Timestamp time={job.interviewTechnical} format="full" />;
        }

        if (job.interviewOffer) {
          <Timestamp time={job.interviewOffer} format="full" />;
        }

        return <Paper
          className="add-pointer"
          style={styleJob}
          key={weakKey(job)}
          id={job.id}
          onTouchTap={this.handleTouchTap}
        >
          <Row id={job.id}>
            <Col id={job.id} md={2} style={styleColumnBorders}>
              <h4 id={job.id} style={{fontFamily: 'MontserratBold', marginBottom: '30px'}}>
                {job.companyName}
              </h4>
              <h5 id={job.id}>{job.title}</h5>
            </Col>

            <Col id={job.id} md={3} style={styleColumnBorders}>
              <div id={job.id} style={styleSudoColumnOdd}>
                <h5 id={job.id} style={styleProgress}>Applied On</h5>
                <p id={job.id} style={styleDateText}>
                  <Timestamp time={job.interviewApplied.date} format="full" />
                </p>
              </div>

              <div id={job.id} style={styleSudoColumnEven}>
                <h5 id={job.id} style={styleProgress}>Informational</h5>
                <p id={job.id} style={styleDateText}>{timeInformational}</p>
              </div>
            </Col>

            <Col id={job.id} md={3} style={styleColumnBorders}>
              <div id={job.id} style={styleSudoColumnOdd}>
                <h5 id={job.id} style={styleProgress}>Phone Screen</h5>
                <p id={job.id} style={styleDateText}>{timePhone}</p>
              </div>

              <div id={job.id} style={styleSudoColumnEven}>
                <h5 id={job.id} style={styleProgress}>On Site</h5>
                <p id={job.id} style={styleDateText}>{timeOnSite}</p>
              </div>
            </Col>

            <Col id={job.id} md={3} style={styleColumnBorders}>
              <div id={job.id} style={styleSudoColumnOdd}>
                <h5 id={job.id} style={styleProgress}>Technical</h5>
                <p id={job.id} style={styleDateText}>{timeTechnical}</p>
              </div>

              <div id={job.id} style={styleSudoColumnEven}>
                <h5 id={job.id} style={styleProgress}>Offer Date</h5>
                <p id={job.id} style={styleDateText}>{timeOffer}</p>
              </div>
            </Col>

            <Col id={job.id} md={1} style={{textAlign: 'center'}}>
              <p id={job.id} style={styleDateText}>Accepted</p>
              <Toggle style={styleToggle}/>

              <p id={job.id} style={styleDateText}>Rejected</p>
              <Toggle style={styleToggle}/>
            </Col>
          </Row>
        </Paper>
      })}
    </Col>

  }
});

export default withRouter(JobsJob);
