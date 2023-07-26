/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserEntity = {
    id: string;
    firstname: string | null;
    lastname: string | null;
    username: string | null;
    balance: number;
    who_invited: UserEntity | null;
    referral_counter: number;
    referral_money: number;
    lang: UserEntity.lang;
    role: UserEntity.role;
    reminder_time: number;
    created: string;
    updated: string;
};

export namespace UserEntity {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }

    export enum role {
        USER = 'user',
        ADMIN = 'admin',
        AFFILIATE = 'affiliate',
    }


}

