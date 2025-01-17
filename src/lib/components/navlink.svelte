<script lang="ts">
	let { href, label, children } = $props();
</script>

<a {href} aria-label={label} class="p-3 font-semibold text-base-100 hover:text-primary-400">
	{@render children()}
</a>
