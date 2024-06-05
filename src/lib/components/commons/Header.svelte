<script lang="ts">
	import { page } from "$app/stores";
	import { NavBrand, NavLi, NavUl, Navbar, NavHamburger } from "flowbite-svelte";

	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="bg-hibiscus_cup_theme_header bg-gray-900">
	<NavBrand href="/">
        <img src="/logo.jpg" alt="logo" class="h-14">
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
	</NavUl>
</Navbar>
