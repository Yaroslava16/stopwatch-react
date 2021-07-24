const deltaTime = (tempDate, savedTime = 0) => {
  const delta =
    (Date.parse(new Date()) - Date.parse(tempDate)) / 1000 + savedTime;

  return Math.round(delta);
};

export default deltaTime;
