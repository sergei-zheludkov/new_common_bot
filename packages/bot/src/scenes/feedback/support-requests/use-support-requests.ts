import { useState } from 'react';

const useSupportRequests = () => {
  const [openedRequestId, setOpenedRequestId] = useState<string | null>(null);

  const handleOpenRequest = (id: string) => {
    setOpenedRequestId(id);
  };

  const handleCloseRequest = () => {
    setOpenedRequestId(null);
  };

  return {
    openedRequestId,
    handleOpenRequest,
    handleCloseRequest,
  };
};

export { useSupportRequests };
