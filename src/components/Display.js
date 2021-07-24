const TimeDisplay = (time) => {
  let sec = 0;
  let min = 0;
  let hours = 0;

  //   const pace = () => {
  //     if (sec >= 60) {
  //       min += 1;
  //       sec = 0;
  //     }

  //     if (min >= 60) {
  //       hours += 1;
  //       min = 0;
  //     }
  //   };

  const formatTime = (val) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  return (
    <div className={"stopwatch__display"}>
      <span>
        {formatTime(hours)}:{formatTime(min)}:{formatTime(sec)}
      </span>
    </div>
  );
};

export default TimeDisplay;
