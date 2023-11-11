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
 * @interface SetDeviceStateRequest
 */
export interface SetDeviceStateRequest {
    /**
     * 
     * @type {string}
     * @memberof SetDeviceStateRequest
     */
    state: SetDeviceStateRequestStateEnum;
    /**
     * 
     * @type {number}
     * @memberof SetDeviceStateRequest
     */
    value: number | null;
}


/**
 * @export
 */
export const SetDeviceStateRequestStateEnum = {
    On: 'on',
    Off: 'off'
} as const;
export type SetDeviceStateRequestStateEnum = typeof SetDeviceStateRequestStateEnum[keyof typeof SetDeviceStateRequestStateEnum];


/**
 * Check if a given object implements the SetDeviceStateRequest interface.
 */
export function instanceOfSetDeviceStateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function SetDeviceStateRequestFromJSON(json: any): SetDeviceStateRequest {
    return SetDeviceStateRequestFromJSONTyped(json, false);
}

export function SetDeviceStateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetDeviceStateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': json['state'],
        'value': json['value'],
    };
}

export function SetDeviceStateRequestToJSON(value?: SetDeviceStateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': value.state,
        'value': value.value,
    };
}

