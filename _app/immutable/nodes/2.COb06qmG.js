import{f as _,a as y}from"../chunks/CezTi1ZY.js";import{h as $,O as k,P as te,Q as t,R as ne,S as f,T as i,V as n,W as se}from"../chunks/D4jfyfa9.js";import{d as re}from"../chunks/Bp2uDD6Z.js";import{i as b}from"../chunks/SOrvEfh6.js";const H=[...` 	
\r\f \v\uFEFF`];function oe(l,e,h){var a=""+l;if(h){for(var u in h)if(h[u])a=a?a+" "+u:u;else if(a.length)for(var v=u.length,c=0;(c=a.indexOf(u,c))>=0;){var m=c+v;(c===0||H.includes(a[c-1]))&&(m===a.length||H.includes(a[m]))?a=(c===0?"":a.substring(0,c))+a.substring(m+1):c=m}}return a===""?null:a}function j(l,e,h,a,u,v){var c=l.__className;if($||c!==h||c===void 0){var m=oe(h,a,v);(!$||m!==l.getAttribute("class"))&&(m==null?l.removeAttribute("class"):l.className=m),l.__className=h}else if(v&&u!==v)for(var g in v){var F=!!v[g];(u==null||F!==!!u[g])&&l.classList.toggle(g,F)}return v}var ie=(l,e)=>k(e,"overview"),ae=(l,e)=>k(e,"auth"),le=(l,e)=>k(e,"firestore-doc"),ce=(l,e)=>k(e,"firestore-collection"),pe=(l,e)=>k(e,"stores"),de=(l,e)=>k(e,"typesafety"),ue=_(`<section id="overview" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Overview</h2> <p>fire-rune provides reactive Svelte components to easily integrate Firebase Auth and
          Firestore into your Svelte applications.</p> <h3 class="svelte-1ncwje1">Features</h3> <ul><li><strong>Declarative Firebase Auth</strong> - Easily handle user authentication states</li> <li><strong>Reactive Firestore Components</strong> - Bind Firestore documents and collections
            to your UI</li> <li><strong>Type-safe</strong> - Full TypeScript support with proper typing for documents and
            collections</li> <li><strong>Svelte 5 compatible</strong> - Designed to work with Svelte 5's runes</li></ul> <h3 class="svelte-1ncwje1">Getting Started</h3> <p>First, install the library:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1">npm install fire-rune firebase</code></pre> <p>Then initialize your Firebase app as usual:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),ve=_(`<section id="auth" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Authentication</h2> <p>The <code class="svelte-1ncwje1">FirebaseUser</code> component makes it easy to subscribe to Firebase authentication
          state changes and render UI based on the current user.</p> <h3 class="svelte-1ncwje1">Basic Usage</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Custom States</h3> <p>You can customize what's shown during loading or when logged out:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),fe=_(`<section id="firestore-doc" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Firestore Documents</h2> <p>Use the <code class="svelte-1ncwje1">FirestoreDoc</code> component to subscribe to a Firestore document and automatically
          re-render when the document changes.</p> <h3 class="svelte-1ncwje1">Basic Usage</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Handling Loading and Errors</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),he=_(`<section id="firestore-collection" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Firestore Collections</h2> <p>Use the <code class="svelte-1ncwje1">FirestoreCollection</code> component to subscribe to a Firestore collection query
          and automatically update when documents in the collection change.</p> <h3 class="svelte-1ncwje1">Basic Usage</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Handling Loading and Errors</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),me=_(`<section id="stores" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Using Stores Directly</h2> <p>fire-rune also provides Svelte stores for direct integration with Svelte's reactive
          system. This is great for more complex scenarios or when you need to use the data in
          multiple places.</p> <h3 class="svelte-1ncwje1">Available Stores</h3> <ul><li><code class="svelte-1ncwje1">userStore</code> - Reactive store for Firebase Auth user state</li> <li><code class="svelte-1ncwje1">documentStore</code> - Reactive store for a Firestore document</li> <li><code class="svelte-1ncwje1">collectionStore</code> - Reactive store for a Firestore collection query</li></ul> <h3 class="svelte-1ncwje1">Example</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),we=_(`<section id="typesafety" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Type Safety</h2> <p>fire-rune comes with full TypeScript support, ensuring that your Firestore data is
          properly typed throughout your application.</p> <h3 class="svelte-1ncwje1">Typed Documents</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Typed Collections</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">ReadonlyWithId Type</h3> <p>The <code class="svelte-1ncwje1">ReadonlyWithId</code> type adds the document ID to your document type:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),ge=_('<main class="container svelte-1ncwje1"><header class="svelte-1ncwje1"><h1 class="svelte-1ncwje1">fire-rune 🔥</h1> <p>A lightweight, declarative Svelte library for Firebase integration</p> <div class="npm-badge svelte-1ncwje1"><code class="svelte-1ncwje1">npm install fire-rune firebase</code></div> <div class="badges svelte-1ncwje1"><a href="https://www.npmjs.com/package/fire-rune" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/fire-rune.svg" alt="npm version"/></a> <a href="https://github.com/andrewthehan/fire-rune/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"/></a></div></header> <nav class="svelte-1ncwje1"><ul class="svelte-1ncwje1"><li><button>Overview</button></li> <li><button>Authentication</button></li> <li><button>Firestore Documents</button></li> <li><button>Firestore Collections</button></li> <li><button>Using Stores</button></li> <li><button>Type Safety</button></li></ul></nav> <div class="content"><!> <!> <!> <!> <!> <!></div> <footer class="svelte-1ncwje1"><p><a href="https://github.com/andrewthehan/fire-rune" target="_blank" rel="noopener noreferrer" class="svelte-1ncwje1">GitHub</a> | <a href="https://www.npmjs.com/package/fire-rune" target="_blank" rel="noopener noreferrer" class="svelte-1ncwje1">NPM</a> | <span>MIT License</span></p></footer></main>');function ke(l){let e=te("overview");var h=ge(),a=i(t(h),2),u=t(a),v=t(u),c=t(v);c.__click=[ie,e];let m;n(v);var g=i(v,2),F=t(g);F.__click=[ae,e];let S;n(g);var D=i(g,2),U=t(D);U.__click=[le,e];let R;n(D);var C=i(D,2),I=t(C);I.__click=[ce,e];let A;n(C);var T=i(C,2),P=t(T);P.__click=[pe,e];let q;n(T);var x=i(T,2),L=t(x);L.__click=[de,e];let E;n(x),n(u),n(a);var N=i(a,2),O=t(N);{var M=s=>{var r=ue(),o=i(t(r),16),d=t(o);d.textContent=`// firebase.js
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
export const db = getFirestore(app);`,n(o),n(r),y(s,r)};b(O,s=>{f(e)==="overview"&&s(M)})}var Q=i(O,2);{var J=s=>{var r=ve(),o=i(t(r),6),d=t(o);d.textContent=`<script lang="ts">
  import { FirebaseUser } from 'fire-rune';
  import { auth } from './firebase';
<\/script>

<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>Hello, {user.displayName}!</p>
  {/snippet}
</FirebaseUser>`,n(o);var p=i(o,6),w=t(p);w.textContent=`<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>User: {user.email}</p>
  {/snippet}

  {#snippet loading()}
    <p>Loading...</p>
  {/snippet}

  {#snippet loggedOut()}
    <p>Please sign in</p>
  {/snippet}
</FirebaseUser>`,n(p),n(r),y(s,r)};b(Q,s=>{f(e)==="auth"&&s(J)})}var B=i(Q,2);{var G=s=>{var r=fe(),o=i(t(r),6),d=t(o);d.textContent=`<script lang="ts">
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
<\/script>

<FirestoreDoc ref={userRef}>
  {#snippet render(profile)}
    <p>Name: {profile.name}</p>
    <p>Bio: {profile.bio}</p>
    <p>Joined: {profile.joined.toDate().toLocaleDateString()}</p>
  {/snippet}
</FirestoreDoc>`,n(o);var p=i(o,4),w=t(p);w.textContent=`<FirestoreDoc ref={userRef}>
  {#snippet render(profile)}
    <p>Name: {profile.name}</p>
  {/snippet}

  {#snippet loading()}
    <p>Loading profile...</p>
  {/snippet}

  {#snippet error(err)}
    <p>Error: {err.message}</p>
  {/snippet}
</FirestoreDoc>`,n(p),n(r),y(s,r)};b(B,s=>{f(e)==="firestore-doc"&&s(G)})}var W=i(B,2);{var K=s=>{var r=he(),o=i(t(r),6),d=t(o);d.textContent=`<script lang="ts">
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
<\/script>

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
</FirestoreCollection>`,n(o);var p=i(o,4),w=t(p);w.textContent=`<FirestoreCollection query={tasksQuery}>
  {#snippet render(tasks)}
    <!-- render tasks -->
  {/snippet}

  {#snippet loading()}
    <p>Loading tasks...</p>
  {/snippet}

  {#snippet error(err)}
    <p>Error: {err.message}</p>
  {/snippet}
</FirestoreCollection>`,n(p),n(r),y(s,r)};b(W,s=>{f(e)==="firestore-collection"&&s(K)})}var Y=i(W,2);{var V=s=>{var r=me(),o=i(t(r),10),d=t(o);d.textContent=`<script lang="ts">
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
<\/script>

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
{/if}`,n(o),n(r),y(s,r)};b(Y,s=>{f(e)==="stores"&&s(V)})}var X=i(Y,2);{var Z=s=>{var r=we(),o=i(t(r),6),d=t(o);d.textContent=`// Define your document type
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
</FirestoreDoc>`,n(o);var p=i(o,4),w=t(p);w.textContent=`// Define your document type
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
</FirestoreCollection>`,n(p);var z=i(p,6),ee=t(z);ee.textContent=`import { ReadonlyWithId } from 'fire-rune';

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
</FirestoreCollection>`,n(z),n(r),y(s,r)};b(X,s=>{f(e)==="typesafety"&&s(Z)})}n(N),se(2),n(h),ne((s,r,o,d,p,w)=>{m=j(c,1,"svelte-1ncwje1",null,m,s),S=j(F,1,"svelte-1ncwje1",null,S,r),R=j(U,1,"svelte-1ncwje1",null,R,o),A=j(I,1,"svelte-1ncwje1",null,A,d),q=j(P,1,"svelte-1ncwje1",null,q,p),E=j(L,1,"svelte-1ncwje1",null,E,w)},[()=>({active:f(e)==="overview"}),()=>({active:f(e)==="auth"}),()=>({active:f(e)==="firestore-doc"}),()=>({active:f(e)==="firestore-collection"}),()=>({active:f(e)==="stores"}),()=>({active:f(e)==="typesafety"})]),y(l,h)}re(["click"]);export{ke as component};
