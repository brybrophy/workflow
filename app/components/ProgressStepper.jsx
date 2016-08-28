import { Step, StepButton, Stepper } from 'material-ui/Stepper';
import React from 'react';

const ProgressStepper = React.createClass({
  getInitialState() {
    return {
      finished: false,
      stepIndex: 0
    };
  },

  handleClick(event) {
    const stepIndex = Number.parseInt(event.currentTarget.value);

    this.setState({ stepIndex });
  },

  handleNext() {
    const { stepIndex } = this.state;

    this.setState({ finished: stepIndex >= 2, stepIndex: stepIndex + 1 });
  },

  handlePrev() {
    const { stepIndex } = this.state;

    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  },

  render() {
    const { stepIndex } = this.state;

    const styles = {
      stepper: {
        marginTop: '35px',
        width: '80%'
      }
    }

    return <div>
      <Stepper activeStep={stepIndex} linear={false} style={styles.stepper}>
        <Step>
          <StepButton onClick={this.handleClick} value={0}>
            Applied
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={this.handleClick} value={1}>
            Informational
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={this.handleClick} value={2}>
            Phone Screen
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={this.handleClick} value={3}>
            Take Home
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={this.handleClick} value={4}>
            Technical
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={this.handleClick} value={5}>
            On Site
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={this.handleClick} value={6}>
            Offer Recieved
          </StepButton>
        </Step>
      </Stepper>
    </div>;
  }
});

export default ProgressStepper;
