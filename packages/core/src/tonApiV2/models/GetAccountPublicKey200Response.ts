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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetAccountPublicKey200Response
 */
export interface GetAccountPublicKey200Response {
    /**
     * 
     * @type {string}
     * @memberof GetAccountPublicKey200Response
     */
    publicKey: string;
}

/**
 * Check if a given object implements the GetAccountPublicKey200Response interface.
 */
export function instanceOfGetAccountPublicKey200Response(value: object): boolean {
    if (!('publicKey' in value)) return false;
    return true;
}

export function GetAccountPublicKey200ResponseFromJSON(json: any): GetAccountPublicKey200Response {
    return GetAccountPublicKey200ResponseFromJSONTyped(json, false);
}

export function GetAccountPublicKey200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAccountPublicKey200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'publicKey': json['public_key'],
    };
}

export function GetAccountPublicKey200ResponseToJSON(value?: GetAccountPublicKey200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'public_key': value['publicKey'],
    };
}

