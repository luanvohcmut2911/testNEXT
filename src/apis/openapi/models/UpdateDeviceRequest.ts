/* tslint:disable */
/* eslint-disable */
/**
 * @fastify/swagger
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 8.12.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateDeviceRequest
 */
export interface UpdateDeviceRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    description_location?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceRequest
     */
    device_category?: UpdateDeviceRequestDeviceCategoryEnum;
}


/**
 * @export
 */
export const UpdateDeviceRequestDeviceCategoryEnum = {
    Light: 'light',
    Thermostat: 'thermostat',
    Door: 'door',
    AirConditioner: 'air_conditioner',
    Fan: 'fan'
} as const;
export type UpdateDeviceRequestDeviceCategoryEnum = typeof UpdateDeviceRequestDeviceCategoryEnum[keyof typeof UpdateDeviceRequestDeviceCategoryEnum];


/**
 * Check if a given object implements the UpdateDeviceRequest interface.
 */
export function instanceOfUpdateDeviceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateDeviceRequestFromJSON(json: any): UpdateDeviceRequest {
    return UpdateDeviceRequestFromJSONTyped(json, false);
}

export function UpdateDeviceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDeviceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'description_location': !exists(json, 'description_location') ? undefined : json['description_location'],
        'device_category': !exists(json, 'device_category') ? undefined : json['device_category'],
    };
}

export function UpdateDeviceRequestToJSON(value?: UpdateDeviceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'path': value.path,
        'description': value.description,
        'description_location': value.description_location,
        'device_category': value.device_category,
    };
}

