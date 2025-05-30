# fire-rune 🔥

https://fire-rune.ahh.fyi/

A lightweight, declarative Svelte library for Firebase integration.

[![npm version](https://img.shields.io/npm/v/fire-rune.svg)](https://www.npmjs.com/package/fire-rune)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

fire-rune provides reactive Svelte components to easily integrate Firebase Auth and Firestore into your Svelte applications.

## Features

- **Declarative Firebase Auth** - Easily handle user authentication states
- **Reactive Firestore Components** - Bind Firestore documents and collections to your UI
- **Type-safe** - Full TypeScript support with proper typing for documents and collections
- **Svelte 5 compatible** - Designed to work with Svelte 5's runes

## Installation

```bash
npm install fire-rune firebase
```

## Quick Start

```svelte
<script>
  import { FirebaseUser, FirestoreCollection } from 'fire-rune';
  import { auth, db } from './firebase';
  import { query, collection, where } from 'firebase/firestore';

  const tasksQuery = query(collection(db, 'tasks'), where('completed', '==', false));
</script>

<FirebaseUser {auth}>
  {#snippet render(user)}
    <h2>Hello, {user.displayName}!</h2>

    <FirestoreCollection query={tasksQuery}>
      {#snippet render(tasks)}
        <p>You have {tasks.length} tasks</p>
      {/snippet}
    </FirestoreCollection>
  {/snippet}
</FirebaseUser>
```

## Documentation

For detailed documentation and examples, visit the [documentation site](https://fire-rune.ahh.fyi/).

## Components & Stores

- **`FirebaseUser`** - Subscribe to Firebase authentication state
- **`FirestoreDoc`** - Subscribe to a Firestore document
- **`FirestoreCollection`** - Subscribe to a Firestore collection query
- **`userStore`** - Reactive store for Firebase Auth user state
- **`documentStore`** - Reactive store for a Firestore document
- **`collectionStore`** - Reactive store for a Firestore collection query

## License

MIT © 2024
