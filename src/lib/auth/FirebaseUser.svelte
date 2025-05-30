<script lang="ts">
  import type { Auth, User } from 'firebase/auth';
  import type { Snippet } from 'svelte';
  import { userStore } from './stores.js';

  const {
    auth,
    render,
    loading = defaultLoading,
    loggedOut = defaultLoggedOut,
  }: {
    auth: Auth;
    render: Snippet<[User]>;
    loading?: Snippet<[]>;
    loggedOut?: Snippet<[]>;
  } = $props();

  const store = userStore(auth);
</script>

{#snippet defaultLoading()}
  <p>Loading...</p>
{/snippet}

{#snippet defaultLoggedOut()}
  <p>Logged out</p>
{/snippet}

{#if $store === undefined}
  {@render loading()}
{:else if $store === null}
  {@render loggedOut()}
{:else}
  {@render render($store)}
{/if}
