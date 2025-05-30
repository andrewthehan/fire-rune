<script lang="ts">
  let activeSection = $state('overview');
</script>

<main class="container">
  <header>
    <h1>fire-rune 🔥</h1>
    <p>A lightweight, declarative Svelte library for Firebase integration</p>

    <div class="npm-badge">
      <code>npm install fire-rune firebase</code>
    </div>

    <div class="badges">
      <a href="https://www.npmjs.com/package/fire-rune" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/v/fire-rune.svg" alt="npm version" />
      </a>
      <a
        href="https://github.com/andrewthehan/fire-rune/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
      </a>
    </div>
  </header>

  <nav>
    <ul>
      <li>
        <button
          class:active={activeSection === 'overview'}
          onclick={() => (activeSection = 'overview')}
        >
          Overview
        </button>
      </li>
      <li>
        <button class:active={activeSection === 'auth'} onclick={() => (activeSection = 'auth')}>
          Authentication
        </button>
      </li>
      <li>
        <button
          class:active={activeSection === 'firestore-doc'}
          onclick={() => (activeSection = 'firestore-doc')}
        >
          Firestore Documents
        </button>
      </li>
      <li>
        <button
          class:active={activeSection === 'firestore-collection'}
          onclick={() => (activeSection = 'firestore-collection')}
        >
          Firestore Collections
        </button>
      </li>
      <li>
        <button
          class:active={activeSection === 'stores'}
          onclick={() => (activeSection = 'stores')}
        >
          Using Stores
        </button>
      </li>
      <li>
        <button
          class:active={activeSection === 'typesafety'}
          onclick={() => (activeSection = 'typesafety')}
        >
          Type Safety
        </button>
      </li>
    </ul>
  </nav>

  <div class="content">
    {#if activeSection === 'overview'}
      <section id="overview">
        <h2>Overview</h2>
        <p>
          fire-rune provides reactive Svelte components to easily integrate Firebase Auth and
          Firestore into your Svelte applications.
        </p>

        <h3>Features</h3>
        <ul>
          <li>
            <strong>Declarative Firebase Auth</strong> - Easily handle user authentication states
          </li>
          <li>
            <strong>Reactive Firestore Components</strong> - Bind Firestore documents and collections
            to your UI
          </li>
          <li>
            <strong>Type-safe</strong> - Full TypeScript support with proper typing for documents and
            collections
          </li>
          <li><strong>Svelte 5 compatible</strong> - Designed to work with Svelte 5's runes</li>
        </ul>

        <h3>Getting Started</h3>
        <p>First, install the library:</p>
        <pre><code>npm install fire-rune firebase</code></pre>

        <p>Then initialize your Firebase app as usual:</p>
        <pre><code
            >{`// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  // ...other config options
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);`}</code
          ></pre>
      </section>
    {/if}

    {#if activeSection === 'auth'}
      <section id="auth">
        <h2>Authentication</h2>
        <p>
          The <code>FirebaseUser</code> component makes it easy to subscribe to Firebase authentication
          state changes and render UI based on the current user.
        </p>

        <h3>Basic Usage</h3>
        <pre><code
            >{`<script>
  import { FirebaseUser } from 'fire-rune';
  import { auth } from './firebase';
</script>

<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>Hello, {user.displayName}!</p>
  {/snippet}
</FirebaseUser>`}</code
          ></pre>

        <h3>Custom States</h3>
        <p>You can customize what's shown during loading or when logged out:</p>

        <pre><code
            >{`<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>User: {user.email}</p>
  {/snippet}

  {#snippet loading()}
    <p>Loading...</p>
  {/snippet}

  {#snippet loggedOut()}
    <p>Please sign in</p>
  {/snippet}
</FirebaseUser>`}</code
          ></pre>
      </section>
    {/if}

    {#if activeSection === 'firestore-doc'}
      <section id="firestore-doc">
        <h2>Firestore Documents</h2>
        <p>
          Use the <code>FirestoreDoc</code> component to subscribe to a Firestore document and automatically
          re-render when the document changes.
        </p>

        <h3>Basic Usage</h3>
        <pre><code
            >{`<script>
  import { FirestoreDoc, typedDoc } from 'fire-rune';
  import { db } from './firebase';
  import { doc } from 'firebase/firestore';

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
</FirestoreDoc>`}</code
          ></pre>

        <h3>Handling Loading and Errors</h3>
        <pre><code
            >{`<FirestoreDoc ref={userRef}>
  {#snippet render(profile)}
    <p>Name: {profile.name}</p>
  {/snippet}

  {#snippet loading()}
    <p>Loading profile...</p>
  {/snippet}

  {#snippet error(err)}
    <p>Error: {err.message}</p>
  {/snippet}
</FirestoreDoc>`}</code
          ></pre>
      </section>
    {/if}

    {#if activeSection === 'firestore-collection'}
      <section id="firestore-collection">
        <h2>Firestore Collections</h2>
        <p>
          Use the <code>FirestoreCollection</code> component to subscribe to a Firestore collection query
          and automatically update when documents in the collection change.
        </p>

        <h3>Basic Usage</h3>
        <pre><code
            >{`<script>
  import { FirestoreCollection, typedCollection } from 'fire-rune';
  import { db } from './firebase';
  import { query, where, orderBy, limit } from 'firebase/firestore';

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
</FirestoreCollection>`}</code
          ></pre>

        <h3>Handling Loading and Errors</h3>
        <pre><code
            >{`<FirestoreCollection query={tasksQuery}>
  {#snippet render(tasks)}
    <!-- render tasks -->
  {/snippet}

  {#snippet loading()}
    <p>Loading tasks...</p>
  {/snippet}

  {#snippet error(err)}
    <p>Error: {err.message}</p>
  {/snippet}
</FirestoreCollection>`}</code
          ></pre>
      </section>
    {/if}

    {#if activeSection === 'stores'}
      <section id="stores">
        <h2>Using Stores Directly</h2>
        <p>
          fire-rune also provides Svelte stores for direct integration with Svelte's reactive
          system. This is great for more complex scenarios or when you need to use the data in
          multiple places.
        </p>

        <h3>Available Stores</h3>
        <ul>
          <li><code>userStore</code> - Reactive store for Firebase Auth user state</li>
          <li><code>documentStore</code> - Reactive store for a Firestore document</li>
          <li><code>collectionStore</code> - Reactive store for a Firestore collection query</li>
        </ul>

        <h3>Example with Svelte 5 Runes</h3>
        <pre>
					<code>
					{`<script>
  import { userStore, documentStore, collectionStore } from 'fire-rune';
  import { auth, db } from './firebase';
  import { doc, collection, query, where, limit } from 'firebase/firestore';

  // Auth state
  let user = $derived(userStore(auth));

  // Document store
  let userDocRef = $derived(user ? doc(db, 'users', user.uid) : null);
  let userDoc = $derived(userDocRef ? documentStore(userDocRef) : null);

  // Collection store
  let tasksQuery = $derived(
    user ? query(collection(db, 'tasks'), where('userId', '==', user.uid), limit(5)) : null
  );
  let tasks = $derived(tasksQuery ? collectionStore(tasksQuery) : null);
</script>

{#if user}
  <h2>Welcome, {user.displayName}!</h2>
  
  {#if userDoc}
    <p>Profile: {userDoc.name}</p>
  {/if}
  
  {#if tasks}
    <p>You have {tasks.length} tasks</p>
  {/if}
{:else}
  <p>Please sign in</p>
{/if}`}</code
          ></pre>
      </section>
    {/if}

    {#if activeSection === 'typesafety'}
      <section id="typesafety">
        <h2>Type Safety</h2>
        <p>
          fire-rune comes with full TypeScript support, ensuring that your Firestore data is
          properly typed throughout your application.
        </p>

        <h3>Typed Documents</h3>
        <pre><code
            >{`// Define your document type
type UserProfile = {
  name: string;
  email: string;
  photoURL?: string;
  lastActive: Date;
};

// Create a typed document reference
const userRef = typedDoc<UserProfile>(db, 'users', userId);

// The returned document in FirestoreDoc will be typed as UserProfile
<FirestoreDoc ref={userRef}>
  {#snippet render(profile)} 
    // profile is typed as UserProfile
    {profile.name} // TypeScript knows this is a string
  {/snippet}
</FirestoreDoc>`}</code
          ></pre>

        <h3>Typed Collections</h3>
        <pre><code
            >{`// Define your document type
type Task = {
  title: string;
  completed: boolean;
  dueDate: Date;
};

// Create a typed collection reference
const tasksCollection = typedCollection<Task>(db, 'tasks');

// Create a query
const tasksQuery = query(
  tasksCollection,
  where('completed', '==', false),
  orderBy('dueDate')
);

// The returned collection in FirestoreCollection will be an array of Task
<FirestoreCollection query={tasksQuery}>
  {#snippet render(tasks)}
    // tasks is typed as Task[]
    {#each tasks as task}
      {task.title} // TypeScript knows this is a string
    {/each}
  {/snippet}
</FirestoreCollection>`}</code
          ></pre>

        <h3>ReadonlyWithId Type</h3>
        <p>
          The <code>ReadonlyWithId</code> type adds the document ID to your document type:
        </p>

        <pre><code
            >{`import { ReadonlyWithId } from 'fire-rune';

type Task = {
  title: string;
  completed: boolean;
};

// TaskWithId includes all Task fields plus an 'id' field
type TaskWithId = ReadonlyWithId<Task>;

// Now you can use it in your component
<FirestoreCollection query={tasksQuery}>
  {#snippet render(tasks)}
    {#each tasks as task}
      <p>Task ID: {task.id}, Title: {task.title}</p>
    {/each}
  {/snippet}
</FirestoreCollection>`}</code
          ></pre>
      </section>
    {/if}
  </div>

  <footer>
    <p>
      <a href="https://github.com/andrewthehan/fire-rune" target="_blank" rel="noopener noreferrer"
        >GitHub</a
      >
      |
      <a href="https://www.npmjs.com/package/fire-rune" target="_blank" rel="noopener noreferrer"
        >NPM</a
      >
      |
      <span>MIT License</span>
    </p>
  </footer>
</main>

<style>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      sans-serif;
    color: #333;
    line-height: 1.6;
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }

  h1 {
    color: #ff3e00;
    font-size: 3rem;
    margin: 0 0 0.5rem;
  }

  .npm-badge {
    background: #f3f3f3;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin: 1rem 0;
    display: inline-block;
  }

  .badges {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  }

  nav {
    margin-bottom: 2rem;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
  }

  nav button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-weight: 500;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  nav button:hover {
    background-color: #f3f3f3;
  }

  nav button.active {
    background-color: #ff3e00;
    color: white;
  }

  section {
    margin-bottom: 3rem;
  }

  h2 {
    color: #ff3e00;
    margin-top: 0;
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }

  code {
    font-family: monospace;
    background-color: #f3f3f3;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9rem;
  }

  pre {
    background-color: #f8f8f8;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    border: 1px solid #eee;
    margin: 1rem 0;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }

  footer {
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
    text-align: center;
    font-size: 0.9rem;
    color: #666;
  }

  footer a {
    color: #ff3e00;
    text-decoration: none;
  }

  footer a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
    }
  }
</style>
