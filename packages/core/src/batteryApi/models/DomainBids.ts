/* tslint:disable */
/* eslint-disable */
/**
 * Custodial-Battery REST API.
 * REST API for Custodial Battery which provides gas to different networks to help execute transactions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DomainBid } from './DomainBid';
import {
    DomainBidFromJSON,
    DomainBidFromJSONTyped,
    DomainBidToJSON,
    DomainBidToJSONTyped,
} from './DomainBid';

/**
 * 
 * @export
 * @interface DomainBids
 */
export interface DomainBids {
    /**
     * 
     * @type {Array<DomainBid>}
     * @memberof DomainBids
     */
    data: Array<DomainBid>;
}

/**
 * Check if a given object implements the DomainBids interface.
 */
export function instanceOfDomainBids(value: object): value is DomainBids {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function DomainBidsFromJSON(json: any): DomainBids {
    return DomainBidsFromJSONTyped(json, false);
}

export function DomainBidsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBids {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(DomainBidFromJSON)),
    };
}

  export function DomainBidsToJSON(json: any): DomainBids {
      return DomainBidsToJSONTyped(json, false);
  }

  export function DomainBidsToJSONTyped(value?: DomainBids | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(DomainBidToJSON)),
    };
}
