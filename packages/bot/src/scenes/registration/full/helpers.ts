import { date } from '@common_bot/shared';

const { getTimeToDisplay } = date;

const getTimezone = (time: number) => {
  const timeToDisplay = getTimeToDisplay(time);

  return time < 0 ? `-${timeToDisplay}` : `+${timeToDisplay}`;
};

export { getTimezone };
