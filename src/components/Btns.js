import TimeDisplay from "./Display";

const Btns = ({ start, stop, wait, reset, time }) => {
  return (
    <>
      <span>{TimeDisplay(time)}</span>
      <button onClick={start}>START</button>

      <button onClick={stop}>STOP</button>

      <button onClick={wait}>WAIT</button>

      <button onClick={reset}>RESET</button>
    </>
  );
};

export default Btns;
