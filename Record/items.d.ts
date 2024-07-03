type Items<Value, Keys extends readonly(string|number)[]> = Keys extends readonly[infer Key, ...infer Tail]
  ? Value extends Required<Record<Key, infer Item>>
    ? readonly [Item, ...Items<Value, Tail>]
    : readonly [Value[Key], ...Items<Value, Tail>] | Items<Value, Tail>
      : Keys extends readonly []
        ? readonly []
        : Keys extends ArrayLike<infer Key>
          ? readonly(Value[Key])[] | []
          : readonly unknown[] | []
;


/**
  * @param {Array<PropertyKey>}
  * @returns {Function}
  * @example
  * ```
  * items(["x", "y"])({ x: 1, y: 2. z: 3}) // [1, 2];
  * items(["z", "y"])({ x: 1, y: 2. z: 3}) // [3, 2];
  * items(["z", "d"])({ x: 1, y: 2. z: 3}) // [3];
  * items(["x", "d", "o", y])({ x: undefined, y: 2. d: null}) // [undefined, null, 2];
  * ```
  */
export default function items<Keys extends readonly(string|number)[]>(keys: Keys):<Value extends Record<Keys[number], any>>(value: Value)=>Items<Value, Keys>;
