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
 * @interface BlockRaw
 */
export interface BlockRaw {
    /**
     * 
     * @type {number}
     * @memberof BlockRaw
     */
    workchain: number;
    /**
     * 
     * @type {string}
     * @memberof BlockRaw
     */
    shard: string;
    /**
     * 
     * @type {number}
     * @memberof BlockRaw
     */
    seqno: number;
    /**
     * 
     * @type {string}
     * @memberof BlockRaw
     */
    rootHash: string;
    /**
     * 
     * @type {string}
     * @memberof BlockRaw
     */
    fileHash: string;
}

/**
 * Check if a given object implements the BlockRaw interface.
 */
export function instanceOfBlockRaw(value: object): boolean {
    if (!('workchain' in value)) return false;
    if (!('shard' in value)) return false;
    if (!('seqno' in value)) return false;
    if (!('rootHash' in value)) return false;
    if (!('fileHash' in value)) return false;
    return true;
}

export function BlockRawFromJSON(json: any): BlockRaw {
    return BlockRawFromJSONTyped(json, false);
}

export function BlockRawFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRaw {
    if (json == null) {
        return json;
    }
    return {
        
        'workchain': json['workchain'],
        'shard': json['shard'],
        'seqno': json['seqno'],
        'rootHash': json['root_hash'],
        'fileHash': json['file_hash'],
    };
}

export function BlockRawToJSON(value?: BlockRaw | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'workchain': value['workchain'],
        'shard': value['shard'],
        'seqno': value['seqno'],
        'root_hash': value['rootHash'],
        'file_hash': value['fileHash'],
    };
}

