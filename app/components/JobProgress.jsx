import { Grid, Row, Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import React from 'react';

const JobProgress = React.createClass({
  render() {
    const styleColumn = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center'
    };

    const stylePaper = {
      height: '122px',
      padding: '20px'
    };

    const styleParagraph = {
      borderBottom: '1px solid black'
    };

    const styleRow= {
      padding: '10px'
    };

    const styleSpan = {
      float: 'right'
    };

    return <Grid style={{ margin: '20px auto', maxWidth: '650px' }}>
      {/* <Row> */}
        <Col xs={12} >
          <Paper style={stylePaper} zDepth={2}>
            <Col xs={12} sm={4} style={styleColumn}>
              <h3 style={{ margin: '0 auto', padding: '0 10px' }}>Informational</h3>
            </Col>
            <Col xs={12} sm={4} style={styleColumn}>
              <Row style={styleRow}>
                <p style={styleParagraph}>
                  Date:
                  <span style={styleSpan}>Mon. August 29th</span>
                </p>
              </Row>
              <Row style={styleRow}>
                <p style={styleParagraph}>
                  Reminder:
                  <span style={styleSpan}>1 Day Before</span>
                </p>
              </Row>
            </Col>
            <Col xs={12} sm={4} style={styleColumn}>
              <Row style={styleRow}>
                <p style={styleParagraph}>
                  Time:
                  <span style={styleSpan}>10:00 AM</span>
                </p>
              </Row>
              <Row style={styleRow}>
                <p style={styleParagraph}>
                  Follow Up:
                  <span style={styleSpan}>1 Day After</span>
                </p>
              </Row>
            </Col>
          </Paper>
        </Col>
      {/* </Row> */}
    </Grid>;
  }
});

export default JobProgress;
