<script lang="ts">
	import * as m from "$messages";
	import { page } from "$app/state";
	import { availableLanguageTags } from "$paraglide/runtime";
	import { i18n } from "$lib/i18n.js";
	import { NavLink } from "$lib/components";

	let currentLang = i18n.getLanguageFromUrl(page.url);
</script>

<header class="flex px-4 py-2">
	<nav class="ml-auto flex">
		<NavLink href="/" label={m.home()}>{m.home()}</NavLink>
		<NavLink href="/projects" label={m.projects()}>{m.projects()}</NavLink>
		<NavLink href="/about" label={m.about()}>{m.about()}</NavLink>
		<NavLink href="/contact" label={m.contact()}>{m.contact()}</NavLink>
	</nav>
	<div class="my-auto ml-4 flex h-fit rounded-md bg-base-900 p-0.5">
		{#each availableLanguageTags as lang}
			<a
				href={i18n.route(page.url.pathname)}
				hreflang={lang}
				class="flex w-12 items-center justify-center rounded p-2 py-1.5 text-sm font-bold {lang ===
					currentLang && 'bg-base-800'}"
			>
				{lang.toUpperCase()}
			</a>
		{/each}
	</div>
</header>
