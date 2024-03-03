import type { FeedbackEntity } from '@common_bot/api';
import { DATE } from '@common_bot/shared';
import {
  FEEDBACK_TYPE_ICONS, FEEDBACK_STATUS_ICONS, DEFAULT_TEXT, MAX_TEXT_SIZE,
} from '../constants';

const { getFormattedDate } = DATE;

type Params = {
  id: string;
  text: string | null;
  date: string;
  type: FeedbackEntity.type;
  status: FeedbackEntity.status;
  onClick: (id: string) => void;
};

const getRequestListItemParams = ({
  id, date, text, type, status, onClick,
}: Params) => {
  const messageIcon = FEEDBACK_TYPE_ICONS[type];
  const statusIcon = FEEDBACK_STATUS_ICONS[status];
  const formattedDate = getFormattedDate(date, 'DD.MM.YY');
  const descriptionText = text
    ? text.trim().slice(0, MAX_TEXT_SIZE).concat('...')
    : DEFAULT_TEXT;

  const title = `${messageIcon} ${descriptionText} ${statusIcon} ${formattedDate}`;

  const handleOpen = () => {
    onClick(id);
  };

  return { title, handleOpen };
};

export { getRequestListItemParams };
