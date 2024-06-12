import { apiClient } from '$lib/store.server';
import { json } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function POST({request}): Promise<Response> {
    console.log(request);
    // const isSelfRequest = request.headers.get('sec-fetch-site') === 'same-origin';
    // if (!isSelfRequest){ return json(new Response()); }

    const client = get(apiClient);
    console.log(client);

    const { twitch_ids } = await request.json();
    console.log(twitch_ids);

    const response = await client.users.getUsersByIds(twitch_ids);
    console.log(response);
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