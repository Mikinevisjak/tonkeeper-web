/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { Jetton } from './Jetton';
import {
    JettonFromJSON,
    JettonFromJSONTyped,
    JettonToJSON,
} from './Jetton';
import type { Refund } from './Refund';
import {
    RefundFromJSON,
    RefundFromJSONTyped,
    RefundToJSON,
} from './Refund';

/**
 * 
 * @export
 * @interface JettonTransferAction
 */
export interface JettonTransferAction {
    /**
     * amount in quanta of tokens
     * @type {string}
     * @memberof JettonTransferAction
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof JettonTransferAction
     */
    comment?: string;
    /**
     * 
     * @type {Jetton}
     * @memberof JettonTransferAction
     */
    jetton: Jetton;
    /**
     * 
     * @type {AccountAddress}
     * @memberof JettonTransferAction
     */
    recipient?: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof JettonTransferAction
     */
    recipientsWallet: string;
    /**
     * 
     * @type {Refund}
     * @memberof JettonTransferAction
     */
    refund?: Refund;
    /**
     * 
     * @type {AccountAddress}
     * @memberof JettonTransferAction
     */
    sender?: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof JettonTransferAction
     */
    sendersWallet: string;
}

/**
 * Check if a given object implements the JettonTransferAction interface.
 */
export function instanceOfJettonTransferAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "jetton" in value;
    isInstance = isInstance && "recipientsWallet" in value;
    isInstance = isInstance && "sendersWallet" in value;

    return isInstance;
}

export function JettonTransferActionFromJSON(json: any): JettonTransferAction {
    return JettonTransferActionFromJSONTyped(json, false);
}

export function JettonTransferActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonTransferAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'jetton': JettonFromJSON(json['jetton']),
        'recipient': !exists(json, 'recipient') ? undefined : AccountAddressFromJSON(json['recipient']),
        'recipientsWallet': json['recipients_wallet'],
        'refund': !exists(json, 'refund') ? undefined : RefundFromJSON(json['refund']),
        'sender': !exists(json, 'sender') ? undefined : AccountAddressFromJSON(json['sender']),
        'sendersWallet': json['senders_wallet'],
    };
}

export function JettonTransferActionToJSON(value?: JettonTransferAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'comment': value.comment,
        'jetton': JettonToJSON(value.jetton),
        'recipient': AccountAddressToJSON(value.recipient),
        'recipients_wallet': value.recipientsWallet,
        'refund': RefundToJSON(value.refund),
        'sender': AccountAddressToJSON(value.sender),
        'senders_wallet': value.sendersWallet,
    };
}
