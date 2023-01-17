import { PaymentStatusEnum } from '../enums';

const isIssued = (status: PaymentStatusEnum) => status === PaymentStatusEnum.ISSUED;
const isWaiting = (status: PaymentStatusEnum) => status === PaymentStatusEnum.WAITING;
const isPaid = (status: PaymentStatusEnum) => status === PaymentStatusEnum.PAID;
const isCanceled = (status: PaymentStatusEnum) => status === PaymentStatusEnum.CANCELED;
const isRejected = (status: PaymentStatusEnum) => status === PaymentStatusEnum.REJECTED;

export {
  isIssued,
  isWaiting,
  isPaid,
  isCanceled,
  isRejected,
};
