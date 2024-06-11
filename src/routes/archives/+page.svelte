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
	import { MAIN_MEMBER, MEMBERS } from '$lib/members';
	import type { TeamName } from '$lib/types/on-the-run/TeamName';
	import { onMount } from 'svelte';
	import { ARCHIVES } from '$lib/archives';

    // https://github.com/fikryfahrezy/svelte-player/blob/main/src/lib/players/types.ts
    type OnProgressProps = {
        played: number;
        playedSeconds: number;
        loaded?: number;
        loadedSeconds?: number;
    }
    
	let isShowSidemenu = true;
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	const TEAM_NAMES: TeamName[] = ['本配信', '赤', '緑', '青'];

    /**
     * 動画が表示中か
     */
    let watchVideoIds: {[key: string]: boolean} = {};
	/**
	 * 動画が再生中か
	 */
	let playingVideoIds: {[key: string]: boolean} = {};
	/**
	 * Twitch Player制御 
	 */
    let playerRefs: {[key: string]: any} = {};

    /**
     * 本配信をシーク操作中か
     */
    let mainSeeking = false;
    /**
     * 本配信の再生率(0~1)
     */
    let mainPlayed = 0;
    const handleProgress = (event: CustomEvent<OnProgressProps>) => {
		const state = event.detail;
		// console.log('onProgress', state);
		// We only want to update time slider if we are not currently seeking
		if (!mainSeeking && state.played !== undefined) {
			mainPlayed = state.played;
		}
	}
    /**
     * 本配信全体時間(sec)
     */
    let mainDuration = 0;
    const handleDuration = (event: CustomEvent<number | null>) => {
        mainDuration = event.detail ?? 0;
		console.log(mainDuration);
    }

	/**
	 * 本配信と他の配信の再生時間を同期する
	 * 
	 * 本配信を基準とする
	 */
	const syncProgress = () => {
		// 調整が終わるまで一時停止
		updatePlayingVideos(false);

		const mainVideoId = MAIN_MEMBER.archive_ids[0];
		const mainArchive = ARCHIVES.filter(archive => archive.id == mainVideoId)[0];

		const mainProgressSec =  mainArchive.duration_sec * mainPlayed;
		for (const archive of ARCHIVES) {
			const isMain = archive.id == mainVideoId;
			if (isMain) { continue; }

			const videoId = archive.id;
			const isShow = watchVideoIds[videoId];
			if(!isShow){ continue; }
			
			// 本配信と各種配信の開始時間の差分を計算
			const archiveProgressSec = mainProgressSec - archive.diff;
			const isBeforeStart = archiveProgressSec < 0;
			const isAfterEnd = archiveProgressSec > archive.duration_sec;
			if (isBeforeStart)
			{
				playerRefs[videoId].seekTo(parseFloat(String(0)));
			}
			else if(isAfterEnd)
			{
				playerRefs[videoId].seekTo(parseFloat(String(1)));
			}
			else
			{
				// Seekは割合で指定する　進捗時間 / 全体配信時間
				const archiveProgress = archiveProgressSec / archive.duration_sec;
				playerRefs[videoId].seekTo(parseFloat(String(archiveProgress)));
			}
		}

		updatePlayingVideos(true);
	}

	/**
	 * すべての動画の再生状態を更新
	 * @param isPlay 再生状態
	 */
	const updatePlayingVideos = (toPlay: boolean) => {
		for (const member of MEMBERS) {
			const archiveId = member.archive_ids[0];
			const isShow = watchVideoIds[archiveId];
			if (!isShow){ continue; }

			playingVideoIds[archiveId] = toPlay;
		}
	}

    onMount(() => {
        MEMBERS.forEach((member) => {
            const enabled = member.team === "本配信";
            watchVideoIds[member.archive_ids[0]] = enabled;
			playingVideoIds[member.archive_ids[0]] = false;
			playerRefs[member.archive_ids[0]] = null;
        });
    })
</script>

<div class="mr-6 my-2 text-right">
    <!-- <Button color="yellow" on:click={() => (playerRefs[MAIN_MEMBER.archive_ids[0]].seekTo(parseFloat(String(0.5))))}>本配信に同期</Button> -->
	<Button color="yellow" on:click={syncProgress}>本配信に同期</Button>
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

<div class="flex flex-wrap justify-center sm:gap-2">
    {#each MEMBERS as member}
        {@const videoId = member.archive_ids[0]}
        {@const showViewer = watchVideoIds[videoId]}
        {@const isMainVideo = member.team === "本配信"}
        {#if showViewer}
			<div class="aspect-video sm:w-2/5" 
			class:main-team={isMainVideo}
			class:red-team={member.team === "赤"}
			class:green-team={member.team === "緑"}
			class:blue-team={member.team === "青"}
			>
            {#if isMainVideo}
                <SveltePlayer
                    url="https://www.twitch.tv/videos/{videoId}"
                    controls={true}
                    bind:this={playerRefs[videoId]}
					bind:playing={playingVideoIds[videoId]}
                    on:progress={handleProgress}
                    on:duration={handleDuration}
					on:pause={() => playingVideoIds[videoId] = false}
					on:play={() => playingVideoIds[videoId] = true}
                />
            {:else}
                <SveltePlayer
                    url="https://www.twitch.tv/videos/{videoId}"
                    controls={true}
					bind:this={playerRefs[videoId]}
					bind:playing={playingVideoIds[videoId]}
					on:pause={() => playingVideoIds[videoId] = false}
					on:play={() => playingVideoIds[videoId] = true}
                />
            
            {/if}
			</div>
        {/if}
    {/each}
</div>

<style>
	.main-team {
		box-shadow:
			0 0 5px black;
	}
	.red-team {
		box-shadow:
			0 0 5px red;
	}
	.green-team {
		box-shadow:
			0 0 5px green;
	}
	.blue-team {
		box-shadow:
			0 0 5px blue;
	}
</style>