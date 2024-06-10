<script lang="ts">
	import SveltePlayer from 'svelte-player';
	import {
		Drawer,
		Button,
		CloseButton,
		Sidebar,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarWrapper,
		Checkbox
	} from 'flowbite-svelte';
	import { UsersGroupSolid, VideoCameraSolid } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	import { MEMBERS } from '$lib/members';
	import type { TeamName } from '$lib/types/on-the-run/TeamName';
	import { onMount } from 'svelte';
    
	let isShowSidemenu = true;
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	const TEAM_NAMES: TeamName[] = ['本配信', '赤', '緑', '青'];

    /**
     * 視聴対象の動画ID
     */
    let watchVideoIds: {[key: string]: boolean} = {};

    onMount(() => {
        MEMBERS.forEach((member) => {
            const enabled = member.team === "本配信";
            watchVideoIds[member.archive_ids[0]] = enabled;
        });
    })
</script>

<div class="mr-6 my-2 text-right">
	<Button on:click={() => (isShowSidemenu = false)}>配信を追加</Button>
</div>
<Drawer
	placement="right"
	transitionType="fly"
	{transitionParams}
	bind:hidden={isShowSidemenu}
	id="sidebar2"
>
	<div class="flex items-center">
		<h5
			id="drawer-navigation-label-3"
			class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
		>
			Menu
		</h5>
		<CloseButton on:click={() => (isShowSidemenu = true)} class="mb-4 dark:text-white" />
	</div>
	<Sidebar>
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				{#each TEAM_NAMES as teamName}
					{@const teamMembers = MEMBERS.filter(member => member.team === teamName)}
					{#if teamMembers}
						{#if teamName == '本配信'}
							{@const member = teamMembers[0]}
                            {@const videoId = member.archive_ids[0]}
							<Checkbox bind:checked={watchVideoIds[videoId]} value={videoId}>
								<VideoCameraSolid
									class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								/>
								{member.name}
							</Checkbox>
						{:else}
							<SidebarGroup>
								<SidebarDropdownWrapper label="{teamName}チーム">
									<svelte:fragment slot="icon">
										<UsersGroupSolid
											class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
										/>
									</svelte:fragment>
									{#each teamMembers as member}
                                    {@const videoId = member.archive_ids[0]}
										<Checkbox bind:checked={watchVideoIds[videoId]} value={videoId}>
											<VideoCameraSolid
												class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
											/>
											{member.name}
										</Checkbox>
									{/each}
								</SidebarDropdownWrapper>
							</SidebarGroup>
						{/if}
					{/if}
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>

<div class="flex flex-wrap justify-center">
    {#each MEMBERS as member}
        {@const videoId = member.archive_ids[0]}
        {@const showViewer = watchVideoIds[videoId]}
        {#if showViewer}
            <div class="aspect-video sm:w-1/2">
                <SveltePlayer
                    url="https://www.twitch.tv/videos/{videoId}"
                    controls={true}
                />
            </div>
        {/if}
    {/each}
</div>
