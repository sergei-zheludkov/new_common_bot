import { getTimeFromNumber } from './get-time-from-number';

const getTimezone = (time: number) => {
  const timeToDisplay = getTimeFromNumber(time);

  return time < 0 ? `-${timeToDisplay}` : `+${timeToDisplay}`;
};

export { getTimezone };
