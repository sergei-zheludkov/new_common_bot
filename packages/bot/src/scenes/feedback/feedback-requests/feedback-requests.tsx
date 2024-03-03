import React from 'react';
import { FeedbackRequestList } from './feedback-request-list';
import { FeedbackRequestController } from './feedback-request-controller';
import { useFeedbackRequests } from './use-feedback-requests';

const FeedbackRequests = () => {
  const {
    openedRequestId,
    handleOpenRequest,
    handleCloseRequest,
  } = useFeedbackRequests();

  if (!openedRequestId) {
    return <FeedbackRequestList onOpen={handleOpenRequest} />;
  }

  return <FeedbackRequestController id={openedRequestId} onClose={handleCloseRequest} />;
};

export { FeedbackRequests };
