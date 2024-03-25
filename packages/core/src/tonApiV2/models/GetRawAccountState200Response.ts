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
import type { BlockRaw } from './BlockRaw';
import {
    BlockRawFromJSON,
    BlockRawFromJSONTyped,
    BlockRawToJSON,
} from './BlockRaw';

/**
 * 
 * @export
 * @interface GetRawAccountState200Response
 */
export interface GetRawAccountState200Response {
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawAccountState200Response
     */
    id: BlockRaw;
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawAccountState200Response
     */
    shardblk: BlockRaw;
    /**
     * 
     * @type {string}
     * @memberof GetRawAccountState200Response
     */
    shardProof: string;
    /**
     * 
     * @type {string}
     * @memberof GetRawAccountState200Response
     */
    proof: string;
    /**
     * 
     * @type {string}
     * @memberof GetRawAccountState200Response
     */
    state: string;
}

/**
 * Check if a given object implements the GetRawAccountState200Response interface.
 */
export function instanceOfGetRawAccountState200Response(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('shardblk' in value)) return false;
    if (!('shardProof' in value)) return false;
    if (!('proof' in value)) return false;
    if (!('state' in value)) return false;
    return true;
}

export function GetRawAccountState200ResponseFromJSON(json: any): GetRawAccountState200Response {
    return GetRawAccountState200ResponseFromJSONTyped(json, false);
}

export function GetRawAccountState200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawAccountState200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': BlockRawFromJSON(json['id']),
        'shardblk': BlockRawFromJSON(json['shardblk']),
        'shardProof': json['shard_proof'],
        'proof': json['proof'],
        'state': json['state'],
    };
}

export function GetRawAccountState200ResponseToJSON(value?: GetRawAccountState200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': BlockRawToJSON(value['id']),
        'shardblk': BlockRawToJSON(value['shardblk']),
        'shard_proof': value['shardProof'],
        'proof': value['proof'],
        'state': value['state'],
    };
}

