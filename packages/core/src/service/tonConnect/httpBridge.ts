import { IAppSdk } from '../../AppSdk';
import { AppKey } from '../../Keys';
import { IStorage } from '../../Storage';
import {
    AppRequest,
    ConnectEvent,
    DisconnectEvent,
    KeyPair,
    RpcMethod,
    WalletResponse
} from '../../entries/tonConnect';
import { AccountConnection } from './connectionService';
import { SessionCrypto } from './protocol';
import { hexToByteArray } from './utils';

const defaultBridgeUrl = 'https://bridge.tonapi.io/bridge';
const defaultTtl = 300;

export const sendEventToBridge = async <T extends RpcMethod>({
    response,
    sessionKeyPair,
    clientSessionId,
    ttl = defaultTtl,
    bridgeUrl = defaultBridgeUrl
}: {
    response: WalletResponse<T> | ConnectEvent | DisconnectEvent;
    sessionKeyPair: KeyPair;
    clientSessionId: string;
    ttl?: number;
    bridgeUrl?: string;
}) => {
    const sessionCrypto = new SessionCrypto(sessionKeyPair);
    const url = `${bridgeUrl}/message?client_id=${sessionCrypto.sessionId}&to=${clientSessionId}&ttl=${ttl}`;

    const encodedResponse = sessionCrypto.encrypt(
        JSON.stringify(response),
        new Uint8Array(Buffer.from(clientSessionId, 'hex').buffer)
    );

    await fetch(url, {
        body: Buffer.from(encodedResponse).toString('base64'),
        method: 'POST'
    });
};

export const getLastEventId = async (storage: IStorage) => {
    const result = await storage.get<string>(AppKey.LAST_HTTP_EVENT_ID);
    return result ?? undefined;
};

const setLastEventId = async (storage: IStorage, lastEventId: string) => {
    await storage.set(AppKey.LAST_HTTP_EVENT_ID, lastEventId);
};

interface TonConnectRequest {
    from: string;
    message: string;
}

export const subscribeTonConnect = ({
    sdk,
    connections,
    lastEventId,
    bridgeUrl = defaultBridgeUrl
}: {
    sdk: IAppSdk;
    lastEventId?: string;
    connections?: AccountConnection[];
    bridgeUrl?: string;
}) => {
    if (!connections || connections.length === 0) {
        return () => {};
    }

    const walletSessionIds = connections
        .map(item => new SessionCrypto(item.sessionKeyPair).sessionId)
        .join(',');

    let url = `${bridgeUrl}/events?client_id=${walletSessionIds}`;

    if (lastEventId) {
        url += `&last_event_id=${lastEventId}`;
    }

    console.log('sse connect', url);

    const eventSource = new EventSource(url);

    const onMessage = (params: MessageEvent<string>) => {
        setLastEventId(sdk.storage, params.lastEventId);

        const { from, message }: TonConnectRequest = JSON.parse(params.data);

        const connection = connections.find(item => item.clientSessionId === from);
        if (!connection) return;

        const sessionCrypto = new SessionCrypto(connection.sessionKeyPair);

        const request: AppRequest<RpcMethod> = JSON.parse(
            sessionCrypto.decrypt(
                new Uint8Array(Buffer.from(message, 'base64').buffer),
                hexToByteArray(from)
            )
        );

        sdk.uiEvents.emit('tonConnect', {
            method: 'tonConnect',
            id: Date.now(),
            params: { request, connection }
        });
    };

    const onOpen = () => {
        console.log('sse connect: opened');
    };

    const onError = (event: Event) => {
        console.log('sse connect: error', event);
    };

    eventSource.addEventListener('message', onMessage);
    eventSource.addEventListener('open', onOpen);
    eventSource.addEventListener('error', onError);

    return () => {
        eventSource.removeEventListener('message', onMessage);
        eventSource.removeEventListener('open', onOpen);
        eventSource.removeEventListener('error', onError);

        eventSource.close();
    };
};
