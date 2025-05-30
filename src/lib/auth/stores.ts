import { onAuthStateChanged, type Auth, type User } from 'firebase/auth';
import { readonly, writable, type Readable } from 'svelte/store';

export function userStore(auth: Auth): Readable<User | null> {
  const store = writable<User | null>(undefined, () =>
    onAuthStateChanged(auth, (user) => store.set(user))
  );

  return readonly(store);
}
