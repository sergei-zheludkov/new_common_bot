import { date } from '@common_bot/shared';

const { getTimeFromNumber } = date;

const getTimezone = (time: number) => {
  const timeToDisplay = getTimeFromNumber(time);

  return time < 0 ? `-${timeToDisplay}` : `+${timeToDisplay}`;
};

export { getTimezone };
