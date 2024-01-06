/**
  * Wraps the input array to search for an element within it by a key. Memorizes the results of its search, effectively indexing them for faster retrieval in the future.
  * @param {PromoteKey} key
  * @example
  * var indexedById = indexed('id');
  * var indexedArray indexedById([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]);
  * indexedArray(0) // undefined
  * indexedArray(1) // { id: 1 } - search receipts
  * indexedArray(1) // { id: 1 } - return into cache
  * indexedArray(3) // { id: 3 } - search receipts
  * indexedArray(2) // { id: 2 } - return into cache
  * indexedArray(3) // { id: 3 } - return into cache
  * indexedArray(4) // { id: 4 } - search receipts
  * indexedArray(4) // { id: 4 } - return into cache
  * indexedArray(7) // { id: 7 } - search receipts
  * indexedArray(4) // { id: 4 } - return into cache
  * indexedArray(5) // { id: 5 } - return into cache
  * indexedArray(6) // { id: 6 } - return into cache
  * indexedArray(7) // { id: 7 } - return into cache
  * indexedArray(8) // undefined
  */
export default function indexed<Key extends PropertyKey>(key: Key): <Value extends Record<Key, any>>(values: readonly Value[]) => <Property extends Value[Key]>(value: Property) => Value | undefined;
