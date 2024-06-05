<script>
	import Footer from '$lib/components/commons/Footer.svelte';
	import Header from '$lib/components/commons/Header.svelte';
	import '../app.pcss';
</script>

<svelte:head>
	<title>逃走中 in Tarkov</title>
	<meta name="description" content="逃走中 in Tarkov" />
</svelte:head>

<div class="relative pb-14 min-h-screen h-full bg-on_the_run-theme cell">
	<Header />
	<div class="my-5">
		<slot />
	</div>
	<Footer />
</div>

<style>
	.cell {
		/* 方眼紙模様に必須のスタイル */
		background-image: linear-gradient(0deg, transparent calc(100% - 1px), #f0f0f033 calc(100% - 1px)),
			linear-gradient(90deg, transparent calc(100% - 1px), #f0f0f033 calc(100% - 1px));
		background-size: 16px 16px;
		background-repeat: repeat;
		background-position: center center;
	}
</style>
