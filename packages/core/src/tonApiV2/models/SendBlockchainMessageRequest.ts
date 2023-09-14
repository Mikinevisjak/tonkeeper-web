/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SendBlockchainMessageRequest
 */
export interface SendBlockchainMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof SendBlockchainMessageRequest
     */
    boc?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SendBlockchainMessageRequest
     */
    batch?: Array<string>;
}

/**
 * Check if a given object implements the SendBlockchainMessageRequest interface.
 */
export function instanceOfSendBlockchainMessageRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SendBlockchainMessageRequestFromJSON(json: any): SendBlockchainMessageRequest {
    return SendBlockchainMessageRequestFromJSONTyped(json, false);
}

export function SendBlockchainMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendBlockchainMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'boc': !exists(json, 'boc') ? undefined : json['boc'],
        'batch': !exists(json, 'batch') ? undefined : json['batch'],
    };
}

export function SendBlockchainMessageRequestToJSON(value?: SendBlockchainMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'boc': value.boc,
        'batch': value.batch,
    };
}
