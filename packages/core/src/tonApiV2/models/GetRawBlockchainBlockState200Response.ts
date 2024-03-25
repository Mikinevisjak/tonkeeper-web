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
 * @interface GetRawBlockchainBlockState200Response
 */
export interface GetRawBlockchainBlockState200Response {
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawBlockchainBlockState200Response
     */
    id: BlockRaw;
    /**
     * 
     * @type {string}
     * @memberof GetRawBlockchainBlockState200Response
     */
    rootHash: string;
    /**
     * 
     * @type {string}
     * @memberof GetRawBlockchainBlockState200Response
     */
    fileHash: string;
    /**
     * 
     * @type {string}
     * @memberof GetRawBlockchainBlockState200Response
     */
    data: string;
}

/**
 * Check if a given object implements the GetRawBlockchainBlockState200Response interface.
 */
export function instanceOfGetRawBlockchainBlockState200Response(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('rootHash' in value)) return false;
    if (!('fileHash' in value)) return false;
    if (!('data' in value)) return false;
    return true;
}

export function GetRawBlockchainBlockState200ResponseFromJSON(json: any): GetRawBlockchainBlockState200Response {
    return GetRawBlockchainBlockState200ResponseFromJSONTyped(json, false);
}

export function GetRawBlockchainBlockState200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawBlockchainBlockState200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': BlockRawFromJSON(json['id']),
        'rootHash': json['root_hash'],
        'fileHash': json['file_hash'],
        'data': json['data'],
    };
}

export function GetRawBlockchainBlockState200ResponseToJSON(value?: GetRawBlockchainBlockState200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': BlockRawToJSON(value['id']),
        'root_hash': value['rootHash'],
        'file_hash': value['fileHash'],
        'data': value['data'],
    };
}

