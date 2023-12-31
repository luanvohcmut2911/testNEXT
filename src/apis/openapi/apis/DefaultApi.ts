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


import * as runtime from '../runtime';
import type {
  CreateDevice200Response,
  CreateDeviceRequest,
  GetCurrentUser200Response,
  GetDeviceActivities200Response,
  GetDevices200Response,
  SetDeviceStateRequest,
  UpdateDeviceRequest,
  UserLoginRequest,
  UserSignUpRequest,
} from '../models/index';
import {
    CreateDevice200ResponseFromJSON,
    CreateDevice200ResponseToJSON,
    CreateDeviceRequestFromJSON,
    CreateDeviceRequestToJSON,
    GetCurrentUser200ResponseFromJSON,
    GetCurrentUser200ResponseToJSON,
    GetDeviceActivities200ResponseFromJSON,
    GetDeviceActivities200ResponseToJSON,
    GetDevices200ResponseFromJSON,
    GetDevices200ResponseToJSON,
    SetDeviceStateRequestFromJSON,
    SetDeviceStateRequestToJSON,
    UpdateDeviceRequestFromJSON,
    UpdateDeviceRequestToJSON,
    UserLoginRequestFromJSON,
    UserLoginRequestToJSON,
    UserSignUpRequestFromJSON,
    UserSignUpRequestToJSON,
} from '../models/index';

export interface CreateDeviceOperationRequest {
    createDeviceRequest: CreateDeviceRequest;
}

export interface DeleteDeviceRequest {
    deviceId: number;
}

export interface GetDeviceRequest {
    deviceId: number;
}

export interface GetDeviceActivitiesRequest {
    deviceId: number;
}

export interface SetDeviceStateOperationRequest {
    deviceId: number;
    setDeviceStateRequest: SetDeviceStateRequest;
}

export interface UpdateDeviceOperationRequest {
    deviceId: number;
    updateDeviceRequest?: UpdateDeviceRequest;
}

export interface UserLoginOperationRequest {
    userLoginRequest: UserLoginRequest;
}

export interface UserSignUpOperationRequest {
    userSignUpRequest: UserSignUpRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async createDeviceRaw(requestParameters: CreateDeviceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDevice200Response>> {
        if (requestParameters.createDeviceRequest === null || requestParameters.createDeviceRequest === undefined) {
            throw new runtime.RequiredError('createDeviceRequest','Required parameter requestParameters.createDeviceRequest was null or undefined when calling createDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/devices/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateDeviceRequestToJSON(requestParameters.createDeviceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateDevice200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async createDevice(requestParameters: CreateDeviceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDevice200Response> {
        const response = await this.createDeviceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteDeviceRaw(requestParameters: DeleteDeviceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deleteDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/devices/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteDevice(requestParameters: DeleteDeviceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDeviceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllDeviceActivitiesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDeviceActivities200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/device-activities/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDeviceActivities200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async getAllDeviceActivities(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDeviceActivities200Response> {
        const response = await this.getAllDeviceActivitiesRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getCurrentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCurrentUser200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCurrentUser200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async getCurrentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCurrentUser200Response> {
        const response = await this.getCurrentUserRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getDeviceRaw(requestParameters: GetDeviceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDevice200Response>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling getDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/devices/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateDevice200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async getDevice(requestParameters: GetDeviceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDevice200Response> {
        const response = await this.getDeviceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getDeviceActivitiesRaw(requestParameters: GetDeviceActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDeviceActivities200Response>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling getDeviceActivities.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/devices/{deviceId}/activities`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDeviceActivities200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async getDeviceActivities(requestParameters: GetDeviceActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDeviceActivities200Response> {
        const response = await this.getDeviceActivitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getDevicesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDevices200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/devices/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDevices200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async getDevices(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDevices200Response> {
        const response = await this.getDevicesRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async setDeviceStateRaw(requestParameters: SetDeviceStateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling setDeviceState.');
        }

        if (requestParameters.setDeviceStateRequest === null || requestParameters.setDeviceStateRequest === undefined) {
            throw new runtime.RequiredError('setDeviceStateRequest','Required parameter requestParameters.setDeviceStateRequest was null or undefined when calling setDeviceState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/devices/{deviceId}/state`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetDeviceStateRequestToJSON(requestParameters.setDeviceStateRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async setDeviceState(requestParameters: SetDeviceStateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.setDeviceStateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async updateDeviceRaw(requestParameters: UpdateDeviceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDevice200Response>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling updateDevice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/devices/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDeviceRequestToJSON(requestParameters.updateDeviceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateDevice200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateDevice(requestParameters: UpdateDeviceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDevice200Response> {
        const response = await this.updateDeviceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userLoginRaw(requestParameters: UserLoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCurrentUser200Response>> {
        if (requestParameters.userLoginRequest === null || requestParameters.userLoginRequest === undefined) {
            throw new runtime.RequiredError('userLoginRequest','Required parameter requestParameters.userLoginRequest was null or undefined when calling userLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserLoginRequestToJSON(requestParameters.userLoginRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCurrentUser200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async userLogin(requestParameters: UserLoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCurrentUser200Response> {
        const response = await this.userLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userLogoutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userLogout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.userLogoutRaw(initOverrides);
    }

    /**
     */
    async userSignUpRaw(requestParameters: UserSignUpOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCurrentUser200Response>> {
        if (requestParameters.userSignUpRequest === null || requestParameters.userSignUpRequest === undefined) {
            throw new runtime.RequiredError('userSignUpRequest','Required parameter requestParameters.userSignUpRequest was null or undefined when calling userSignUp.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/signup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserSignUpRequestToJSON(requestParameters.userSignUpRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCurrentUser200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async userSignUp(requestParameters: UserSignUpOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCurrentUser200Response> {
        const response = await this.userSignUpRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
