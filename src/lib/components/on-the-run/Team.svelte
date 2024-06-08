<script lang="ts">
	import type { TeamName } from '$lib/types/TeamName.d';
	import { MEMBERS } from '$lib/members';
	
	import TwitterLinkIcon from '$lib/components/link-icon/TwitterLinkIcon.svelte';
	import TwitchLinkIcon from '$lib/components/link-icon/TwitchLinkIcon.svelte';
	import type { TwitchUser } from '$lib/types/twitch/TwitchUser';
	
	export let teamName: TeamName;
	export let twitchUsers: TwitchUser[];

	/**
	 * 順序を保証したTwitchUser情報
	 */
	let orderdTwitchUsers: TwitchUser[];
	/**
	 * APIの問い合わせ状況によってユーザ情報の順序が一定ではないので、並び替え
	*/
	$: {
		const members = MEMBERS.filter(member => member.team === teamName);
		const orderd: TwitchUser[] = [];
		for (const member of members) {
			const twitchUser = twitchUsers.filter(user => user.id === member.twitch_id)[0];
			orderd.push(twitchUser);
		}
		orderdTwitchUsers = orderd;
	}
	

	$: teamInfo = MEMBERS.filter(info => info.team === teamName)[0];

	/**
	 * Twitch IDからTwitter IDを特定
	 * @param twitchId
	 */
	const twitterId = (twitchId: string) => {
		const infos = MEMBERS.filter(member => member.twitch_id === twitchId);

		const info = infos[0];
		const twitterId = info.twitter;
		return twitterId;
	}
</script>

<div class="mx-auto my-5 max-w-2xl">
	<div class="bg-white rounded-lg bg-opacity-60 p-5">
		<span class="font-bold text-3xl text-white"
			class:text-shadow-black={teamName == "本配信"}
			class:text-shadow-red={teamName == "赤"}
			class:text-shadow-green={teamName == "緑"}
			class:text-shadow-blue={teamName == "青"}
			>{teamName}{teamName == "本配信" ? "" : "チーム"}</span>
		<div class="flex justify-center">
			{#each orderdTwitchUsers as member}
			<div class="m-2">
				<img class="rounded-full" src="{member.profilePictureUrl}" alt="{member.displayName}">
				<div class="my-2 text-center font-bold sm:text-lg">
					{member.displayName}
				</div>
				<div class="flex justify-center sm:gap-10">
					<TwitchLinkIcon name={member.name} />
					<TwitterLinkIcon name={twitterId(member.id)} dark={true}/>	
				</div>
			</div>
			{/each}
		</div>
	</div>
</div>

<style>
.text-shadow-black {
	text-shadow: 0 0 10px black, 0 0 10px black, 0 0 10px black;
}

.text-shadow-red {
	text-shadow: 0 0 10px red, 0 0 10px red, 0 0 10px red;
}
.text-shadow-green {
	text-shadow: 0 0 10px green, 0 0 10px green, 0 0 10px green;
}
.text-shadow-blue {
	text-shadow: 0 0 10px blue, 0 0 10px blue, 0 0 10px blue;
}
</style>