<script lang="ts">
	import { page } from "$app/stores";
	import { NavBrand, NavLi, NavUl, Navbar, NavHamburger } from "flowbite-svelte";

	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="bg-gray-900">
	<NavBrand href="/">
        <img src="/logo.jpg" alt="logo" class="h-14">
		<span class=" text-xl ml-3">fan</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/rules">Rules</NavLi>
		<NavLi href="/teams">Teams</NavLi>
		<NavLi href="/archives">Archives</NavLi>
	</NavUl>
</Navbar>
