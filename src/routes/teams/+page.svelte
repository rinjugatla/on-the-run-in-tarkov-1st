<script lang="ts">
    import type { TeamName } from "$lib/types/TeamName";
    import Team from "$lib/components/on-the-run/Team.svelte";
	import { onMount } from "svelte";
    import axios from 'redaxios';
	import type { TwitchUser } from '$lib/types/twitch/TwitchUser';
	import { MEMBERS } from '$lib/members';
	import Loading from '$lib/components/commons/Loading.svelte';

    /**
     * チーム名
     */
    const teamNames: TeamName[] = ["本配信", "赤", "緑", "青"];
    /**
     * 配信者情報
    */
    let twitchUsers: {[key in TeamName]: TwitchUser[] } = {
        "本配信": [],
        "赤": [],
        "緑": [],
        "青": []
    }

    const fetchUsers = async () => {
        const stramerIds = MEMBERS.map(member => member.twitch_id);
        const response = await axios.post<TwitchUser[]>(
            '/api/twitch/users',
            { twitch_ids: stramerIds }
        );
        const users = response.data;
        return users;
    }

    onMount(async () => {
        let users = await fetchUsers();
        for (const team of teamNames) {
            const teamStreamerIds = MEMBERS.
                filter(member => member.team === team).
                map(member => member.twitch_id);
            const teamMembers = users.filter(user => teamStreamerIds.includes(user.id));
            twitchUsers[team] = teamMembers;
        }
    })
</script>

{#if twitchUsers["本配信"].length > 0}
    {#each teamNames as name}
        <Team teamName={name} twitchUsers={twitchUsers[name]} />
    {/each}
{:else}
    <Loading />
{/if}