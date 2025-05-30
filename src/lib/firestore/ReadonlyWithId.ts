import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
  QueryDocumentSnapshot,
  runTransaction,
  type DocumentData,
  type FirestoreDataConverter,
  type SnapshotOptions,
  type WithFieldValue,
} from 'firebase/firestore';

export type ReadonlyWithId<T> = Readonly<T & { id: string }>;

class ReadonlyWithIdConverter<
  DbT extends DocumentData,
  AppT extends ReadonlyWithId<DbT> = ReadonlyWithId<DbT>,
> implements FirestoreDataConverter<AppT, DbT>
{
  private static INSTANCE = new ReadonlyWithIdConverter();

  static instance<T extends DocumentData>(): ReadonlyWithIdConverter<T> {
    return ReadonlyWithIdConverter.INSTANCE as ReadonlyWithIdConverter<T>;
  }

  toFirestore(modelObject: AppT, options?: unknown): WithFieldValue<DbT> {
    const { id, ...rest } = modelObject as AppT;
    return rest as WithFieldValue<DbT>;
  }

  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
    options?: SnapshotOptions
  ): AppT {
    return { id: snapshot.id, ...snapshot.data(options) } as AppT;
  }
}

export function typedDoc<T extends DocumentData>(
  firestore: Firestore,
  path: string,
  ...pathSegments: string[]
): DocumentReference<ReadonlyWithId<T>, T> {
  return doc(firestore, path, ...pathSegments).withConverter<ReadonlyWithId<T>, T>(
    ReadonlyWithIdConverter.instance()
  );
}

export function typedCollection<T extends DocumentData>(
  firestore: Firestore,
  path: string,
  ...pathSegments: string[]
): CollectionReference<ReadonlyWithId<T>, T> {
  return collection(firestore, path, ...pathSegments).withConverter<ReadonlyWithId<T>, T>(
    ReadonlyWithIdConverter.instance()
  );
}

export async function addTypedDoc<T extends DocumentData>(
  collectionRef: CollectionReference<ReadonlyWithId<T>, T>,
  data: T | ReadonlyWithId<T>
): Promise<DocumentReference<ReadonlyWithId<T>, T>> {
  const { id, ...rest } = data;
  if (id) {
    return await runTransaction(collectionRef.firestore, async (transaction) => {
      const docRef = typedDoc<T>(collectionRef.firestore, collectionRef.path, id);
      if ((await transaction.get(docRef)).exists()) {
        return docRef;
      } else {
        await transaction.set(docRef, rest);
      }
      return docRef;
    });
  }

  return addDoc<ReadonlyWithId<T>, T>(collectionRef, { id: '', ...(rest as T) });
}
