/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserCreateDto } from '../models/UserCreateDto';
import type { UserEntity } from '../models/UserEntity';
import type { UserUpdateDto } from '../models/UserUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param id
     * @returns UserEntity User has been found.
     * @throws ApiError
     */
    public static getUser(
        id: string,
    ): CancelablePromise<UserEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found.`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns UserEntity User has been successfully created.
     * @throws ApiError
     */
    public static postUser(
        requestBody: UserCreateDto,
    ): CancelablePromise<UserEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns UserEntity User has been updated.
     * @throws ApiError
     */
    public static patchUser(
        requestBody: UserUpdateDto,
    ): CancelablePromise<UserEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found.`,
            },
        });
    }

}
