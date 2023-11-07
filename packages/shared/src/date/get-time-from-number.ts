const getTimeFromNumber = (time: number) => {
  const absTime = Math.abs(time);
  const hours = String(Math.floor(absTime / 60));
  const minutes = String(absTime % 60).padStart(2, '0');

  return `${hours}:${minutes}`;
};

export { getTimeFromNumber };