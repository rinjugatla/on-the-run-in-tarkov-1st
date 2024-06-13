<script lang="ts">
    import type { TeamName } from "$lib/types/on-the-run/TeamName";
    import Team from "$lib/components/on-the-run/Team.svelte";
	import Loading from '$lib/components/commons/Loading.svelte';
	import type { Member } from "$lib/types/on-the-run/Member";

    /**
     * チーム名
     */
    const teamNames: TeamName[] = ["本配信", "赤", "緑", "青"];
</script>

{#each teamNames as name}
    <Team teamName={name}/>
{/each}