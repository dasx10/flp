type Props<Value, Keys extends readonly(string|number)[]> = Keys extends readonly[infer Key, ...infer Tail]
  ? readonly [Value[Key], ...Props<Value, Tail>]
  : Keys extends readonly []
    ? readonly []
    : Keys extends ArrayLike<infer Key>
      ? readonly(Value[Key])[]
      : readonly unknown[] | []
;


/**
  * @param {Array<PropertyKey>}
  * @returns {Function}
  * @example
  * ```
  * props(["x", "y"])({ x: 1, y: 2. z: 3}) // [1, 2];
  * props(["z", "y"])({ x: 1, y: 2. z: 3}) // [3, 2];
  * props(["z", "d"])({ x: 1, y: 2. z: 3}) // [3, undefined];
  * ```
  */
export default function props<Keys extends readonly(string|number)[]>(keys: Keys):<Value extends Record<Keys[number], any>>(value: Value)=>Props<Value, Keys>;
export var then: (resolve: (module: typeof props) => any) => any;
