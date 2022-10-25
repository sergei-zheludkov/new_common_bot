import { RoleEnum } from '../enums';

const isUser = (role: RoleEnum) => role === RoleEnum.USER;
const isAdmin = (role: RoleEnum) => role === RoleEnum.ADMIN;
const isAffiliate = (role: RoleEnum) => role === RoleEnum.AFFILIATE;

export { isUser, isAdmin, isAffiliate };
