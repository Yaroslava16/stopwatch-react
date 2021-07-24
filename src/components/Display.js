const convertTime = (time) => {
  const sec = formatTime(Math.floor(time % 60));
  const hours = formatTime(Math.floor(time / 3600));
  const min = formatTime(Math.floor(time / 60 - hours * 60));

  const displayTime = `${hours} : ${min} : ${sec}`;

  return displayTime;
};

const formatTime = (val) => val.toString().padStart(2, "0");

export default convertTime;
