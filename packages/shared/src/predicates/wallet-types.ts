import { WalletTypeEnum } from '../enums';

const isTinkoff = (wallet: WalletTypeEnum) => wallet === WalletTypeEnum.TINKOFF;
const isQiwi = (wallet: WalletTypeEnum) => wallet === WalletTypeEnum.QIWI;
const isWebmoney = (wallet: WalletTypeEnum) => wallet === WalletTypeEnum.WEBMONEY;
const isYoomoney = (wallet: WalletTypeEnum) => wallet === WalletTypeEnum.YOOMONEY;

export {
  isTinkoff,
  isQiwi,
  isWebmoney,
  isYoomoney,
};
