import type { Reminder } from './types';

const getReminder = (day: string, num: number): Reminder => ({
  id: `${day}_${num}`,
  time: 600,
  isActive: true,
  isSelected: false,
});

const getTimeForReminder = (time: number, isActive: boolean) => {
  const hours = String(Math.floor(time / 60));
  const minutes = String(time % 60).padStart(2, '0');

  const icon = isActive ? '⏰' : '🔕';
  const displayTime = isActive ? ` ${hours}:${minutes}` : '';
  return `${icon}${displayTime}`;
};

export { getReminder, getTimeForReminder };
