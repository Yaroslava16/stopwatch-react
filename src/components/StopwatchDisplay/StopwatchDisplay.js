import { Component } from "react";
import styles from "../StopwatchDisplay/StopwatchDisplay.module.css";

class StopwatchDisplay extends Component {
  render() {
    const { formatTime, currentTimeSec, currentTimeMin, currentTimeHours } =
      this.props;
    return (
      <div className={styles.Conteiner}>
        <span>
          {formatTime(currentTimeHours)}:{formatTime(currentTimeMin)}:
          {formatTime(currentTimeSec)}
        </span>
      </div>
    );
  }
}

export default StopwatchDisplay;
