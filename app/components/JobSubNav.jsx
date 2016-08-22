import axios from 'axios';
import { Tab, Tabs } from 'material-ui/Tabs';
import { Link, withRouter } from 'react-router';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const JobSubNav = React.createClass({
  getInitialState() {
    return {
      job: {},
      contacts: []
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

  handleActiveTab(event) {
    this.props.router.push(`/job/${this.state.job.id}/${event.props.value}`);
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
      >
        <Tab
          label="Job"
          onActive={this.handleActiveTab}
          style={styleTab}
          value=""
        />
        <Tab
          label="Contacts"
          onActive={this.handleActiveTab}
          style={styleTab}
          value="contacts"
        />
        <Tab
          label="Progress"
          onActive={this.handleActiveTab}
          style={styleTab}
          value="progress"
        />
        <Tab
          label="Notes"
          onActive={this.handleActiveTab}
          style={styleTab}
          value="notes"
        />
      </Tabs>

      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {React.cloneElement(this.props.children, {
          job: this.state.job,
          contact: this.state.contact,
          key: Math.random()
        })}
      </ReactCSSTransitionGroup>
    </div>;
  }
});

export default withRouter(JobSubNav);
