import { initTwitchApiClientServer } from '$lib/common.server.js';

export async function GET({request}): Promise<Response> {
    console.log(request);
    try {
        await initTwitchApiClientServer();
        return new Response("Success")
    } catch (error) {
        return new Response("Error");
    }
}
