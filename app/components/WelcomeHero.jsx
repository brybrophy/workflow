import { Col, Row } from 'react-bootstrap';
import PipesHero from 'components/PipesHero';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';

const WelcomeHero = React.createClass({
  handleTouchTap() {
    this.props.router.push('/auth');
  },

  render() {
    const styles = {
      cloud3: {
        display: 'inline-block',
        position: 'absolute',
        right: '450px',
        top: '70px',
        width: '200px'
      },
      hero: {
        backgroundColor: '#47B4E0',
        margin: '0',
        paddingBottom: '200px'
      },
      heroHeader: {
        color: 'white',
        fontFamily: 'MontserratLight',
        paddingLeft: '50px',
        position: 'relative',
        textAlign: 'center',
        top: '190px'
      },
      heroText: {
        fontFamily: 'MontserratHairline',
        fontSize: '2rem',
        letterSpacing: '0.12rem'
      },
      pipes: {
        position: 'relative',
        left: '32px'
      },
      raisedButton: {
        height: '60px',
        width: '320px'
      },
      raisedButtonLabel: {
        fontFamily: 'Montserrathairline',
        fontSize: '1.8rem',
        position: 'relative',
        top: '17px'
      }
    };

    return <Row style={styles.hero}>
      <Col lg={6} style={styles.pipes}>
        <PipesHero />
      </Col>
      <Col lg={6} style={styles.heroHeader}>
        <Row>
          <Col xs={12}>
            <div style={styles.cloud3}><img src="images/cloud_3.svg" /></div>
            <h2 >
              JOB SEARCH MANAGMENT<br />
              FOR A NEW ERA
            </h2>
          </Col>
        </Row>
        <Row style={styles.heroText}>
          <Col xs={12}>
            <p>Organize your interviews,</p>
            <p>keep track of your contacts,</p>
            <p>measure your progress,</p>
            <p> and land your dream job.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <RaisedButton
              backgroundColor={'#327F9E'}
              label="sign up for free"
              labelColor="white"
              labelStyle={styles.raisedButtonLabel}
              onTouchTap={this.handleTouchTap}
              style={styles.raisedButton}
            />
          </Col>
        </Row>
      </Col>
    </Row>;
  }
});

export default withRouter(WelcomeHero);
