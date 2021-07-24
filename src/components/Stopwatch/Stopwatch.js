import React, { Component } from "react";
import StopwatchDisplay from "../StopwatchDisplay/StopwatchDisplay";
import styles from "../Stopwatch/Stopwatch.module.css";
// import { Observable } from "rxjs";

class Stopwatch extends Component {
  state = {
    running: false,
    currentTimeSec: 0,
    currentTimeMin: 0,
    currentTimeHours: 0,
  };

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
    this.setState({ running: false });
    clearInterval(this.watch);
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
      <div className={styles.Conteiner}>
        <h1>Stopwatch</h1>
        <StopwatchDisplay
          useRef="display"
          {...this.state}
          formatTime={this.formatTime}
        />
        {this.state.running === false && (
          <button className={styles.Btn} onClick={this.start}>
            START
          </button>
        )}
        {this.state.running === true && (
          <button className={styles.Btn} onClick={this.stop}>
            STOP
          </button>
        )}
        <button className={styles.Btn} onClick={this.wait}>
          WAIT
        </button>
        <button className={styles.Btn} onClick={this.reset}>
          RESET
        </button>
      </div>
    );
  }
}

export default Stopwatch;
