import { Col, Grid, Row } from 'react-bootstrap';
import React from 'react';

const WelcomeInfo = React.createClass({
  render() {
    const styles = {
      column: {
        padding: '100px 50px',
        textAlign: 'center'
      },
      extraMargin: {
        marginTop: '35px',
        position: 'relative',
        right: '10px'
      },
      iconContainer: {
        backgroundColor: '#EAE3DC',
        borderRadius: '100%',
        height: '300px',
        marginBottom: '50px',
        padding: '45px',
        width: '300px'
      },
      image: {
        margin: '20px 0'
      },
      infoText: {
        color: '#474543',
        fontFamily: 'MontserratLight',
        fontSize: '1.9rem',
        letterSpacing: '0.12rem',
        lineHeight: '30px'
      }
    };

    return <Grid>
      <Row>
        <Col md={4} style={styles.column} xs={12}>
          <div style={styles.iconContainer}>
            <img src="images/manage_flow.svg" />
          </div>

          <h3>MANAGE INTERVIEW FLOW</h3>

          <img src="images/line.svg" style={styles.image} />

          <p style={styles.infoText}>
            Preparing for interviews is stressfull enough without worrying
            about scheduling. We’ll tell you when to be where and when to
            follow up after your interviews.
          </p>
        </Col>

        <Col md={4} style={styles.column} xs={12}>
          <div style={styles.iconContainer}>
            <img src="images/connect_contacts.svg" style={styles.extraMargin} />
          </div>

          <h3>CONNECT CONTACTS</h3>

          <img src="images/line.svg" style={styles.image} />

          <p style={styles.infoText}>
            Match your contacts to perspective employers. After all, it’s all
            about who you know.
          </p>
        </Col>

        <Col md={4} style={styles.column} xs={12}>
          <div style={styles.iconContainer}>
            <img src="images/right_place.svg" />
          </div>

          <h3>EVERYTHING IN ITS RIGHT PLACE</h3>

          <img src="images/line.svg" style={styles.image} />

          <p style={styles.infoText}>
            You’re sending out dozens of applications per week. We have the
            tools to help you keep track of them all.
          </p>
        </Col>
      </Row>
    </Grid>;
  }
});

export default WelcomeInfo;
