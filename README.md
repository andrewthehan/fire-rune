# fire-rune 🔥

A lightweight, declarative Svelte library for Firebase integration.

[![npm version](https://img.shields.io/npm/v/fire-rune.svg)](https://www.npmjs.com/package/fire-rune)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

fire-rune provides reactive Svelte components to easily integrate Firebase Auth and Firestore into your Svelte applications.

## Installation

```bash
npm install fire-rune firebase
```

## Features

- **Declarative Firebase Auth** - Easily handle user authentication states
- **Reactive Firestore Components** - Bind Firestore documents and collections to your UI
- **Type-safe** - Full TypeScript support with proper typing for documents and collections
- **Svelte 5 compatible** - Designed to work with Svelte 5's runes

## Usage Examples

### Firebase Setup

First, initialize your Firebase app:

```typescript
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID'
  // ...other config options
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### Authentication

Display content based on the user's authentication state:

```svelte
<script>
  import { FirebaseUser } from 'fire-rune';
  import { auth } from './firebase';

  // Simple login state
  let email = $state('');
  let password = $state('');
</script>

<!-- Basic usage -->
<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>Hello, {user.displayName}!</p>
  {/snippet}
</FirebaseUser>

<!-- With custom states -->
<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>User: {user.email}</p>
  {/snippet}

  {#snippet loading()}
    <p>Loading...</p>
  {/snippet}

  {#snippet loggedOut()}
    <p>Please sign in</p>
  {/snippet}
</FirebaseUser>
```

### Working with Firestore Documents

Display and work with a single document:

```svelte
<script>
  import { FirestoreDoc, typedDoc, documentStore } from 'fire-rune';
  import { db } from './firebase';
  import { doc, updateDoc } from 'firebase/firestore';

  // Type definition
  type UserProfile = {
    name: string;
    bio: string;
    joined: Date;
  };

  // Document reference
  const userRef = typedDoc<UserProfile>(db, 'users', 'user123');
</script>

<FirestoreDoc ref={userRef}>
  {#snippet render(profile)}
    <p>Name: {profile.name}</p>
    <p>Bio: {profile.bio}</p>
    <p>Joined: {profile.joined.toDate().toLocaleDateString()}</p>
  {/snippet}
</FirestoreDoc>
```

### Working with Firestore Collections

Display and work with a collection of documents:

```svelte
<script>
  import { FirestoreCollection, typedCollection, addTypedDoc } from 'fire-rune';
  import { db } from './firebase';
  import { query, where, orderBy, limit, doc, updateDoc, deleteDoc } from 'firebase/firestore';

  // Type definition
  type Task = {
    title: string;
    completed: boolean;
    createdAt: Date;
    userId: string;
  };

  // Simple collection query
  const tasksQuery = query(
    typedCollection<Task>(db, 'tasks'),
    where('completed', '==', false),
    orderBy('createdAt', 'desc'),
    limit(10)
  );
</script>

<FirestoreCollection query={tasksQuery}>
  {#snippet render(tasks)}
    <p>Found {tasks.length} tasks</p>
    <ul>
      {#each tasks as task (task.id)}
        <li>
          {task.title} - Created: {task.createdAt.toDate().toLocaleDateString()}
        </li>
      {/each}
    </ul>
  {/snippet}
</FirestoreCollection>
```

### Nested Components Example

Here's a simplified example showing nested Firestore components:

```svelte
<script>
  import { FirebaseUser, FirestoreDoc, FirestoreCollection } from 'fire-rune';
  import { typedDoc, typedCollection } from 'fire-rune';
  import { auth, db } from './firebase';

  export let activityId;
</script>

<FirebaseUser {auth}>
  {#snippet render(user)}
    <FirestoreDoc ref={typedDoc(db, 'users', user.id, 'activities', activityId)}>
      {#snippet render(activity)}
        <h1>{activity.title}</h1>

        <!-- Nested collection -->
        <FirestoreCollection
          query={typedCollection(db, 'users', user.id, 'activities', activityId, 'comments')}
        >
          {#snippet render(comments)}
            <p>Comments: {comments.length}</p>
            {#each comments as comment}
              <p>{comment.text}</p>
            {/each}
          {/snippet}
        </FirestoreCollection>
      {/snippet}
    </FirestoreDoc>
  {/snippet}
</FirebaseUser>
```

### Using Stores Directly

If you need more control, you can use the stores directly with Svelte 5 runes:

```svelte
<script>
  import { userStore, documentStore, collectionStore } from 'fire-rune';
  import { auth, db } from './firebase';
  import { doc, collection, query, where, limit } from 'firebase/firestore';

  // Use stores directly
  let user = $derived(userStore(auth));

  // Create document store
  let userDocRef = $derived(user ? doc(db, 'users', user.uid) : null);
  let userDoc = $derived(userDocRef ? documentStore(userDocRef) : null);

  // Create collection store with query
  let tasksQuery = $derived(
    user ? query(collection(db, 'tasks'), where('userId', '==', user.uid), limit(5)) : null
  );
  let tasks = $derived(tasksQuery ? collectionStore(tasksQuery) : null);
</script>

{#if user}
  <p>User: {user.email}</p>

  <!-- User document data -->
  {#if userDoc}
    <p>Name: {userDoc.displayName}</p>
  {/if}

  <!-- User's tasks -->
  {#if tasks}
    <p>Tasks: {tasks.length}</p>
    <ul>
      {#each tasks as task}
        <li>{task.title}</li>
      {/each}
    </ul>
  {/if}
{:else}
  <p>Not logged in</p>
{/if}
```

## License

MIT © 2025
