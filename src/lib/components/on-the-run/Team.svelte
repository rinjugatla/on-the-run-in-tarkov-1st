<script lang="ts">
	import type { TeamName } from '$lib/types/on-the-run/TeamName.d';
	import { MEMBERS } from '$lib/members';
	import TwitterLinkIcon from '$lib/components/link-icon/TwitterLinkIcon.svelte';
	import TwitchLinkIcon from '$lib/components/link-icon/TwitchLinkIcon.svelte';

	/**
	 * チーム名
	 */
	export let teamName: TeamName;
	/**
	 * チームメンバ
	 */
	const members = MEMBERS.filter(member => member.team === teamName);
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
			{#each members as member}
			<div class="m-2">
				<img class="rounded-full" src="{member.twitch_icon_url}" alt="{member.name}">
				<div class="my-2 text-center font-bold sm:text-lg">
					{member.name}
				</div>
				<div class="flex justify-center sm:gap-10">
					<TwitchLinkIcon name={member.twitch} />
					<TwitterLinkIcon name={member.twitter} dark={true}/>	
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