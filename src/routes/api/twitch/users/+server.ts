import { initTwitchApiClientServer } from '$lib/common.server';
import { apiClient } from '$lib/store.server';
import { json } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function POST({request}): Promise<Response> {
    // const isSelfRequest = request.headers.get('sec-fetch-site') === 'same-origin';
    // if (!isSelfRequest){ return json(new Response()); }

    await initTwitchApiClientServer();

    const client = get(apiClient);
    if(!client){ return new Response("Invalid twitch client"); }

    const { twitch_ids } = await request.json();
    if(!twitch_ids){ return new Response("Invalid params");  }
    if(!client.users){ return new Response("Not found users in twitch client"); }

    const response = await client.users.getUsersByIds(twitch_ids);
    const users =response.map(user => ({
        id: user.id,
        name: user.name,
        displayName: user.displayName,
        description: user.description,
        type: user.type,
        broadcasterType: user.broadcasterType,
        profilePictureUrl: user.profilePictureUrl,
        offlinePlaceholderUrl: user.offlinePlaceholderUrl,
        creationDate: user.creationDate
    }));
    console.log(users);
    return json(users);
}