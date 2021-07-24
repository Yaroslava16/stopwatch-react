import { useRef, useState, useEffect } from "react";
import Display from "../Display";
import deltaTime from "../../helpers/deltaTime";
import Btn from "../Btns/Btns";
import styles from "./Timer.module.css";

const Timer = () => {
  const intervalId = useRef();
  const [time, setTime] = useState(new Date());

  const [clock, setClock] = useState(0);
  const [isRun, setIsRun] = useState(false);
  const [fixedClock, setFixedClock] = useState(0);
  const [wait, setWait] = useState(0);

  useEffect(() => {
    if (isRun) {
      intervalId.current = setInterval(() => setTime(new Date()), 1000);
    }
    return () => () => clearInterval(intervalId.current);
  }, [isRun]);

  const startTime = () => {
    setClock(new Date());
    setIsRun(true);
  };

  const stopTime = () => {
    setIsRun(false);
    clearInterval(intervalId.current);
    setClock(new Date());
  };

  const deltaTimeWait = (tempDate) => {
    const deltaTime = Date.now() - tempDate;
    return deltaTime;
  };

  const waitTime = () => {
    if (!wait) {
      setWait(Date.now());
      return;
    }

    if (isRun & (deltaTimeWait(wait) <= 300)) {
      setIsRun(false);
      setFixedClock(deltaTime(clock, fixedClock));

      clearInterval(intervalId.current);
    }
    setWait(0);
  };

  const resetTime = () => {
    setFixedClock(0);
    setClock(new Date());
  };

  return (
    <div className={styles.Conteiner}>
      <h1 className={styles.Title}>Stopwatch</h1>
      <div className={styles.Display}>
        {isRun ? Display(deltaTime(clock, fixedClock)) : Display(fixedClock)}
      </div>
      <div className={styles.Btns}>
        <Btn className={styles.Btn} onBtnClick={isRun ? stopTime : startTime}>
          <span>{isRun ? "Stop" : "Start"}</span>
        </Btn>
        <Btn onBtnClick={waitTime}>
          <span>Wait</span>
        </Btn>
        <Btn onBtnClick={resetTime}>
          <span>Reset</span>
        </Btn>
      </div>
    </div>
  );
};

export default Timer;
