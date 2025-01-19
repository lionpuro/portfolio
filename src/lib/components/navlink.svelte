<script lang="ts">
	import { page } from "$app/state";

	let { href, label, children } = $props();
	let path = $derived(page.url.pathname.replace(/fi|en/, "").replace(/\/\//, "/"));
</script>

<a
	{href}
	aria-label={label}
	class="p-3 font-semibold {path === href ? 'text-primary-300' : 'text-base-50'}"
>
	{@render children()}
</a>
