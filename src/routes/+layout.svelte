<script lang="ts">
	import type { Path } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import '#lib/assets/styles.css';

	let { children }: LayoutProps = $props();
	let pageTitle = $derived(page.data['pageTitle'] ? page.data['pageTitle'] : 'Home');
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<a href={resolve('')}>home</a>
<a href={resolve('/not-prerendered')}>not prerendered</a>
<a href={resolve('/prerendered')}>prerendered</a>
