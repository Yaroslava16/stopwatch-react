import React, { Component } from "react";
import StopwatchDisplay from "./StopwatchDisplay";

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTimeHours: 0,
    };
  }

  formatTime = (val) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 1000);
    }
  };

  stop = () => {
    this.setState({
      running: false,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTimeHours: 0,
    });
    clearInterval(this.watch);
  };

  wait = () => {
    if (this.running) {
      this.running = false;
      clearInterval(this.watch);
      // dbl-click
      return;
    }

    this.running = true;
    this.watch = setTimeout(() => {
      this.running = false;
      console.log("fkkkkkkk");
    }, 300);
  };

  pace = () => {
    this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }

    if (this.state.currentTimeMin >= 60) {
      this.setState({ currentTimeHours: this.state.currentTimeHours + 1 });
      this.setState({ currentTimeMin: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTimeHours: 0,
    });
  };

  render() {
    return (
      <div className={"stopwatch"}>
        {this.state.running === false && (
          <button onClick={this.start}>START</button>
        )}
        {this.state.running === true && (
          <button onClick={this.stop}>STOP</button>
        )}
        <button onClick={this.wait}>WAIT</button>
        <button onClick={this.reset}>RESET</button>
        <StopwatchDisplay
          useRef="display"
          {...this.state}
          formatTime={this.formatTime}
        />
      </div>
    );
  }
}

export default Stopwatch;
