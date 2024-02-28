import type { GetQuery } from '../types';

const getFeedbackNotesWhere = ({ user_id, support_id, status }: Partial<GetQuery>) => ({
  ...(user_id ? { user: { id: user_id } } : {}),
  ...(support_id ? { support: { id: support_id } } : {}),
  ...(status ? { status } : {}),
});

export { getFeedbackNotesWhere };
