<script lang="ts">
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import { i18n } from "$lib/i18n.js";
	import "~/app.css";
	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="flex h-full flex-col">
		<Header />
		<main class="mx-auto flex w-full max-w-screen-md grow flex-col p-8">
			{@render children()}
		</main>
		<Footer />
	</div>
</ParaglideJS>
