import { date } from '@common_bot/shared';
import type { Reminder } from './types';

const { getTimeToDisplay } = date;

const getReminder = (day: string, num: number): Reminder => ({
  id: `${day}_${num}`,
  time: 600,
  isActive: true,
  isSelected: false,
});

const getTimeForReminder = (time: number, isActive: boolean) => {
  const icon = isActive ? '⏰' : '🔕';
  const displayTime = isActive ? ` ${getTimeToDisplay(time)}` : '';
  return `${icon}${displayTime}`;
};

export { getReminder, getTimeForReminder };
