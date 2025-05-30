<script lang="ts" generics="T extends DocumentData">
	import type { DocumentData, DocumentReference } from 'firebase/firestore';
	import { type Snippet } from 'svelte';
	import { documentStore } from './stores.js';

	const {
		ref,
		render,
		loading = defaultLoading,
		notFound = defaultNotFound
	}: {
		ref: DocumentReference<T>;
		render: Snippet<[T]>;
		loading?: Snippet<[]>;
		notFound?: Snippet<[]>;
	} = $props();

	const store = documentStore<T>(ref);
</script>

{#snippet defaultLoading()}
	<p>Loading...</p>
{/snippet}

{#snippet defaultNotFound()}
	<p>Document not found</p>
{/snippet}

{#if $store === undefined}
	{@render loading()}
{:else if $store === null}
	{@render notFound()}
{:else}
	{@render render($store)}
{/if}
