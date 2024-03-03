import React from 'react';
import { SupportRequestList } from './support-request-list';
import { SupportRequestController } from './support-request-controller';
import { useSupportRequests } from './use-support-requests';

const SupportRequests = () => {
  const {
    openedRequestId,
    handleOpenRequest,
    handleCloseRequest,
  } = useSupportRequests();

  if (!openedRequestId) {
    return <SupportRequestList onOpen={handleOpenRequest} />;
  }

  return <SupportRequestController id={openedRequestId} onClose={handleCloseRequest} />;
};

export { SupportRequests };
