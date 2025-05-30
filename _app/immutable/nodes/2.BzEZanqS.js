import{f as y,a as g}from"../chunks/DbhoGiBQ.js";import{h as H,O as o,u as ne,P as F,Q as se,R as t,S as re,T as v,V as n,W as oe}from"../chunks/DHyMn2wM.js";import{d as ie}from"../chunks/C7XOwwXW.js";import{i as j}from"../chunks/BtGyRYHk.js";const M=[...` 	
\r\f \v\uFEFF`];function ae(l,e,m){var a=""+l;if(m){for(var d in m)if(m[d])a=a?a+" "+d:d;else if(a.length)for(var f=d.length,c=0;(c=a.indexOf(d,c))>=0;){var h=c+f;(c===0||M.includes(a[c-1]))&&(h===a.length||M.includes(a[h]))?a=(c===0?"":a.substring(0,c))+a.substring(h+1):c=h}}return a===""?null:a}function k(l,e,m,a,d,f){var c=l.__className;if(H||c!==m||c===void 0){var h=ae(m,a,f);(!H||h!==l.getAttribute("class"))&&(h==null?l.removeAttribute("class"):l.className=h),l.__className=m}else if(f&&d!==f)for(var _ in f){var b=!!f[_];(d==null||b!==!!d[_])&&l.classList.toggle(_,b)}return f}var le=(l,e)=>F(e,"overview"),ce=(l,e)=>F(e,"auth"),pe=(l,e)=>F(e,"firestore-doc"),de=(l,e)=>F(e,"firestore-collection"),ue=(l,e)=>F(e,"stores"),ve=(l,e)=>F(e,"typesafety"),fe=y(`<section id="overview" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Overview</h2> <p>fire-rune provides reactive Svelte components to easily integrate Firebase Auth and
          Firestore into your Svelte applications.</p> <h3 class="svelte-1ncwje1">Features</h3> <ul><li><strong>Declarative Firebase Auth</strong> - Easily handle user authentication states</li> <li><strong>Reactive Firestore Components</strong> - Bind Firestore documents and collections
            to your UI</li> <li><strong>Type-safe</strong> - Full TypeScript support with proper typing for documents and
            collections</li> <li><strong>Svelte 5 compatible</strong> - Designed to work with Svelte 5's runes</li></ul> <h3 class="svelte-1ncwje1">Getting Started</h3> <p>First, install the library:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1">npm install fire-rune firebase</code></pre> <p>Then initialize your Firebase app as usual:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),he=y(`<section id="auth" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Authentication</h2> <p>The <code class="svelte-1ncwje1">FirebaseUser</code> component makes it easy to subscribe to Firebase authentication
          state changes and render UI based on the current user.</p> <h3 class="svelte-1ncwje1">Basic Usage</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Custom States</h3> <p>You can customize what's shown during loading or when logged out:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),me=y(`<section id="firestore-doc" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Firestore Documents</h2> <p>Use the <code class="svelte-1ncwje1">FirestoreDoc</code> component to subscribe to a Firestore document and automatically
          re-render when the document changes.</p> <h3 class="svelte-1ncwje1">Basic Usage</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Handling Loading and Errors</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),we=y(`<section id="firestore-collection" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Firestore Collections</h2> <p>Use the <code class="svelte-1ncwje1">FirestoreCollection</code> component to subscribe to a Firestore collection query
          and automatically update when documents in the collection change.</p> <h3 class="svelte-1ncwje1">Basic Usage</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Handling Loading and Errors</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),ge=y(`<section id="stores" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Using Stores Directly</h2> <p>fire-rune also provides Svelte stores for direct integration with Svelte's reactive
          system. This is great for more complex scenarios or when you need to use the data in
          multiple places.</p> <h3 class="svelte-1ncwje1">Available Stores</h3> <ul><li><code class="svelte-1ncwje1">userStore</code> - Reactive store for Firebase Auth user state</li> <li><code class="svelte-1ncwje1">documentStore</code> - Reactive store for a Firestore document</li> <li><code class="svelte-1ncwje1">collectionStore</code> - Reactive store for a Firestore collection query</li></ul> <h3 class="svelte-1ncwje1">Example</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),ye=y(`<section id="typesafety" class="svelte-1ncwje1"><h2 class="svelte-1ncwje1">Type Safety</h2> <p>fire-rune comes with full TypeScript support, ensuring that your Firestore data is
          properly typed throughout your application.</p> <h3 class="svelte-1ncwje1">Typed Documents</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">Typed Collections</h3> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre> <h3 class="svelte-1ncwje1">ReadonlyWithId Type</h3> <p>The <code class="svelte-1ncwje1">ReadonlyWithId</code> type adds the document ID to your document type:</p> <pre class="svelte-1ncwje1"><code class="svelte-1ncwje1"></code></pre></section>`),_e=y('<svg viewBox="0 0 1.5 1.5" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="1">🔥</text></svg> <main class="container svelte-1ncwje1"><header class="svelte-1ncwje1"><h1 class="svelte-1ncwje1">fire-rune 🔥</h1> <p>A lightweight, declarative Svelte library for Firebase integration</p> <div class="npm-badge svelte-1ncwje1"><code class="svelte-1ncwje1">npm install fire-rune firebase</code></div> <div class="badges svelte-1ncwje1"><a href="https://www.npmjs.com/package/fire-rune" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/fire-rune.svg" alt="npm version"/></a> <a href="https://github.com/andrewthehan/fire-rune/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"/></a></div></header> <nav class="svelte-1ncwje1"><ul class="svelte-1ncwje1"><li><button>Overview</button></li> <li><button>Authentication</button></li> <li><button>Firestore Documents</button></li> <li><button>Firestore Collections</button></li> <li><button>Using Stores</button></li> <li><button>Type Safety</button></li></ul></nav> <div class="content"><!> <!> <!> <!> <!> <!></div> <footer class="svelte-1ncwje1"><p><a href="https://github.com/andrewthehan/fire-rune" target="_blank" rel="noopener noreferrer" class="svelte-1ncwje1">GitHub</a> | <a href="https://www.npmjs.com/package/fire-rune" target="_blank" rel="noopener noreferrer" class="svelte-1ncwje1">NPM</a> | <span>MIT License</span></p></footer></main>',1);function De(l){let e=se("overview");var m=_e(),a=o(ne(m),2),d=o(t(a),2),f=t(d),c=t(f),h=t(c);h.__click=[le,e];let _;n(c);var b=o(c,2),S=t(b);S.__click=[ce,e];let U;n(b);var D=o(b,2),R=t(D);R.__click=[pe,e];let I;n(D);var C=o(D,2),A=t(C);A.__click=[de,e];let x;n(C);var T=o(C,2),P=t(T);P.__click=[ue,e];let q;n(T);var L=o(T,2),E=t(L);E.__click=[ve,e];let N;n(L),n(f),n(d);var O=o(d,2),Q=t(O);{var J=s=>{var r=fe(),i=o(t(r),16),u=t(i);u.textContent=`// firebase.js
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
export const db = getFirestore(app);`,n(i),n(r),g(s,r)};j(Q,s=>{v(e)==="overview"&&s(J)})}var B=o(Q,2);{var G=s=>{var r=he(),i=o(t(r),6),u=t(i);u.textContent=`<script lang="ts">
  import { FirebaseUser } from 'fire-rune';
  import { auth } from './firebase';
<\/script>

<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>Hello, {user.displayName}!</p>
  {/snippet}
</FirebaseUser>`,n(i);var p=o(i,6),w=t(p);w.textContent=`<FirebaseUser {auth}>
  {#snippet render(user)}
    <p>User: {user.email}</p>
  {/snippet}

  {#snippet loading()}
    <p>Loading...</p>
  {/snippet}

  {#snippet loggedOut()}
    <p>Please sign in</p>
  {/snippet}
</FirebaseUser>`,n(p),n(r),g(s,r)};j(B,s=>{v(e)==="auth"&&s(G)})}var W=o(B,2);{var K=s=>{var r=me(),i=o(t(r),6),u=t(i);u.textContent=`<script lang="ts">
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
</FirestoreDoc>`,n(i);var p=o(i,4),w=t(p);w.textContent=`<FirestoreDoc ref={userRef}>
  {#snippet render(profile)}
    <p>Name: {profile.name}</p>
  {/snippet}

  {#snippet loading()}
    <p>Loading profile...</p>
  {/snippet}

  {#snippet error(err)}
    <p>Error: {err.message}</p>
  {/snippet}
</FirestoreDoc>`,n(p),n(r),g(s,r)};j(W,s=>{v(e)==="firestore-doc"&&s(K)})}var Y=o(W,2);{var V=s=>{var r=we(),i=o(t(r),6),u=t(i);u.textContent=`<script lang="ts">
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
</FirestoreCollection>`,n(i);var p=o(i,4),w=t(p);w.textContent=`<FirestoreCollection query={tasksQuery}>
  {#snippet render(tasks)}
    <!-- render tasks -->
  {/snippet}

  {#snippet loading()}
    <p>Loading tasks...</p>
  {/snippet}

  {#snippet error(err)}
    <p>Error: {err.message}</p>
  {/snippet}
</FirestoreCollection>`,n(p),n(r),g(s,r)};j(Y,s=>{v(e)==="firestore-collection"&&s(V)})}var z=o(Y,2);{var X=s=>{var r=ge(),i=o(t(r),10),u=t(i);u.textContent=`<script lang="ts">
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
{/if}`,n(i),n(r),g(s,r)};j(z,s=>{v(e)==="stores"&&s(X)})}var Z=o(z,2);{var ee=s=>{var r=ye(),i=o(t(r),6),u=t(i);u.textContent=`// Define your document type
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
</FirestoreDoc>`,n(i);var p=o(i,4),w=t(p);w.textContent=`// Define your document type
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
</FirestoreCollection>`,n(p);var $=o(p,6),te=t($);te.textContent=`import { ReadonlyWithId } from 'fire-rune';

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
</FirestoreCollection>`,n($),n(r),g(s,r)};j(Z,s=>{v(e)==="typesafety"&&s(ee)})}n(O),oe(2),n(a),re((s,r,i,u,p,w)=>{_=k(h,1,"svelte-1ncwje1",null,_,s),U=k(S,1,"svelte-1ncwje1",null,U,r),I=k(R,1,"svelte-1ncwje1",null,I,i),x=k(A,1,"svelte-1ncwje1",null,x,u),q=k(P,1,"svelte-1ncwje1",null,q,p),N=k(E,1,"svelte-1ncwje1",null,N,w)},[()=>({active:v(e)==="overview"}),()=>({active:v(e)==="auth"}),()=>({active:v(e)==="firestore-doc"}),()=>({active:v(e)==="firestore-collection"}),()=>({active:v(e)==="stores"}),()=>({active:v(e)==="typesafety"})]),g(l,m)}ie(["click"]);export{De as component};
