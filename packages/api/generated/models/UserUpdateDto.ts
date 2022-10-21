/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserUpdateDto = {
    id: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    balance?: number;
    referral_counter?: number;
    referral_money?: number;
    lang?: UserUpdateDto.lang;
    reminder_time?: number;
};

export namespace UserUpdateDto {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }


}

