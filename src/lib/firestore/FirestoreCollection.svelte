<script lang="ts" generics="T extends DocumentData">
  import type { DocumentData, Query } from 'firebase/firestore';
  import { type Snippet } from 'svelte';
  import { collectionStore } from './stores.js';

  const {
    query,
    render,
    loading = defaultLoading,
    notFound = defaultNotFound,
  }: {
    query: Query<T>;
    render: Snippet<[T[]]>;
    loading?: Snippet<[]>;
    notFound?: Snippet<[]>;
  } = $props();

  const store = collectionStore<T>(query);
</script>

{#snippet defaultLoading()}
  <p>Loading...</p>
{/snippet}

{#snippet defaultNotFound()}
  <p>Collection not found</p>
{/snippet}

{#if $store === undefined}
  {@render loading()}
{:else if $store === null}
  {@render notFound()}
{:else}
  {@render render($store)}
{/if}
