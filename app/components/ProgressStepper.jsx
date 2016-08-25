import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const ProgressStepper = React.createClass({
  getInitialState() {
    return {
      finished: false,
      stepIndex: 0,
    }
  },

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  },

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  },

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>Applied</StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>Informational</StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>Phone Screen</StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>Take Home</StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 4})}>Technical</StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 5})}>On Site</StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 6})}>Offer Recieved</StepButton>
          </Step>
        </Stepper>
      </div>
    );
  }
});

export default ProgressStepper;
