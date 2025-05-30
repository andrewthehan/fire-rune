import { DocumentReference, onSnapshot, Query, type DocumentData } from 'firebase/firestore';
import { writable, type Readable } from 'svelte/store';

export function documentStore<T extends DocumentData>(
  ref: DocumentReference<T>
): Readable<T | null> {
  const store = writable<T | null>(undefined, () =>
    onSnapshot(
      ref,
      (snapshot) => store.set(snapshot.exists() ? snapshot.data() : null),
      (error) => {
        console.error('Error listening to document:', error);
        store.set(null);
      }
    )
  );

  return store;
}

export function collectionStore<T extends DocumentData>(query: Query<T>): Readable<T[] | null> {
  const store = writable<T[] | null>(undefined, () =>
    onSnapshot(
      query,
      (snapshot) => store.set(snapshot.docs.map((snapshot) => snapshot.data())),
      (error) => {
        console.error('Error listening to collection:', error);
        store.set(null);
      }
    )
  );

  return store;
}
