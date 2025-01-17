<script lang="ts">
	import NavLink from "~/lib/components/navlink.svelte";
</script>

<header class="flex px-4 py-2">
	<nav class="ml-auto flex">
		<NavLink href="/" label="Home">Home</NavLink>
		<NavLink href="/projects" label="Projects">Projects</NavLink>
		<NavLink href="/about" label="About">About</NavLink>
		<NavLink href="/contact" label="Contact">Contact</NavLink>
	</nav>
</header>
