<script lang="ts">
	import "~/app.css";
	import Header from "~/lib/components/header.svelte";
	import Footer from "~/lib/components/footer.svelte";
	let { children } = $props();
</script>

<div class="flex h-full flex-col">
	<Header />
	<main class="mx-auto flex w-full max-w-screen-md grow flex-col p-8">
		{@render children()}
	</main>
	<Footer />
</div>
