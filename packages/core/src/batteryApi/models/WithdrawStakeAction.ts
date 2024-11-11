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
import type { PoolImplementationType } from './PoolImplementationType';
import {
    PoolImplementationTypeFromJSON,
    PoolImplementationTypeFromJSONTyped,
    PoolImplementationTypeToJSON,
    PoolImplementationTypeToJSONTyped,
} from './PoolImplementationType';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
    AccountAddressToJSONTyped,
} from './AccountAddress';

/**
 * validator's participation in elections
 * @export
 * @interface WithdrawStakeAction
 */
export interface WithdrawStakeAction {
    /**
     * 
     * @type {number}
     * @memberof WithdrawStakeAction
     */
    amount: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof WithdrawStakeAction
     */
    staker: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof WithdrawStakeAction
     */
    pool: AccountAddress;
    /**
     * 
     * @type {PoolImplementationType}
     * @memberof WithdrawStakeAction
     */
    implementation: PoolImplementationType;
}



/**
 * Check if a given object implements the WithdrawStakeAction interface.
 */
export function instanceOfWithdrawStakeAction(value: object): value is WithdrawStakeAction {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('staker' in value) || value['staker'] === undefined) return false;
    if (!('pool' in value) || value['pool'] === undefined) return false;
    if (!('implementation' in value) || value['implementation'] === undefined) return false;
    return true;
}

export function WithdrawStakeActionFromJSON(json: any): WithdrawStakeAction {
    return WithdrawStakeActionFromJSONTyped(json, false);
}

export function WithdrawStakeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WithdrawStakeAction {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'staker': AccountAddressFromJSON(json['staker']),
        'pool': AccountAddressFromJSON(json['pool']),
        'implementation': PoolImplementationTypeFromJSON(json['implementation']),
    };
}

  export function WithdrawStakeActionToJSON(json: any): WithdrawStakeAction {
      return WithdrawStakeActionToJSONTyped(json, false);
  }

  export function WithdrawStakeActionToJSONTyped(value?: WithdrawStakeAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'staker': AccountAddressToJSON(value['staker']),
        'pool': AccountAddressToJSON(value['pool']),
        'implementation': PoolImplementationTypeToJSON(value['implementation']),
    };
}
