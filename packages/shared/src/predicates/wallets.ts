import { WalletEnum } from '../enums';

const isTinkoff = (wallet: WalletEnum) => wallet === WalletEnum.TINKOFF;
const isQiwi = (wallet: WalletEnum) => wallet === WalletEnum.QIWI;
const isWebmoney = (wallet: WalletEnum) => wallet === WalletEnum.WEBMONEY;
const isYoomoney = (wallet: WalletEnum) => wallet === WalletEnum.YOOMONEY;

export {
  isTinkoff,
  isQiwi,
  isWebmoney,
  isYoomoney,
};
