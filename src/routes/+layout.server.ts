import { PRIVATE_CLIENT_ID, PRIVATE_CLIENT_SECRET } from '$env/static/private';
import { apiClient } from '$lib/store.server';
import { ApiClient } from '@twurple/api';
import { RefreshingAuthProvider } from '@twurple/auth';

// TwitchAPI初期化
apiClient.subscribe(async(value) => {
    if(!value) {
        const provider = new RefreshingAuthProvider({ clientId: PRIVATE_CLIENT_ID, clientSecret: PRIVATE_CLIENT_SECRET });
        await provider.getAppAccessToken();

        const client = new ApiClient({authProvider: provider});
        apiClient.set(client);
        console.info("init twitch api client");
    }
})