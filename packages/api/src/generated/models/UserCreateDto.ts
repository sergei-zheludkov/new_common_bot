/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserCreateDto = {
    id: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    who_invited?: string;
    lang: UserCreateDto.lang;
};

export namespace UserCreateDto {

    export enum lang {
        RU = 'ru',
        EN = 'en',
    }


}
