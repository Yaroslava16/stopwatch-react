import { Component } from "react";

class StopwatchDisplay extends Component {
  render() {
    const { formatTime, currentTimeSec, currentTimeMin, currentTimeHours } =
      this.props;
    return (
      <div className={"stopwatch__display"}>
        <span>
          {formatTime(currentTimeHours)}:{formatTime(currentTimeMin)}:
          {formatTime(currentTimeSec)}
        </span>
      </div>
    );
  }
}

export default StopwatchDisplay;
