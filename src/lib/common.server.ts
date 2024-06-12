import { PRIVATE_CLIENT_ID, PRIVATE_CLIENT_SECRET } from '$env/static/private';
import { apiClient, testText } from '$lib/store.server';
import { ApiClient } from '@twurple/api';
import { RefreshingAuthProvider } from '@twurple/auth';

export const initTwitchApiClientServer = async () => {
    testText.subscribe(async (value) => {
        if(!value){
            testText.set("init");
            console.log(PRIVATE_CLIENT_ID, PRIVATE_CLIENT_SECRET);
        }
    })

    // TwitchAPI初期化
    apiClient.subscribe(async (value) => {
        if (!value) {
            const provider = new RefreshingAuthProvider({ clientId: PRIVATE_CLIENT_ID, clientSecret: PRIVATE_CLIENT_SECRET });
            await provider.getAppAccessToken();

            const client = new ApiClient({ authProvider: provider });
            console.log(client);
            const data = await client.users.getUserById("682441785");
            console.log(data?.displayName);

            apiClient.set(client);
            console.info("init twitch api client");
        }
    })
}

/**
 * 完全新規でクライアントを作成
 * 
 * 1リクエストで1クライアントを作るので効率が悪いが、Storeからクライアントを呼び出せないようなので回避策として追加
 * 
 * @returns Twitch APIクライアント
 */
export const twitchApiClient = async () => {
    const provider = new RefreshingAuthProvider({ clientId: PRIVATE_CLIENT_ID, clientSecret: PRIVATE_CLIENT_SECRET });
    await provider.getAppAccessToken();

    const client = new ApiClient({ authProvider: provider });
    return client;
}