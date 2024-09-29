export type Contains<Values extends readonly any[], Value> = Values extends readonly []
  ? false
  : Value extends Values[number]
    ? boolean
    : Values[number] extends Value
      ? boolean
      : false
;

/**
  * @example
  * ```javascript
  * contains(1)([1, 2, 3]); // true
  * contains(4)([1, 2, 3]); // false
  * ```
  * @description Check if an array contains a value
  * @param {*} y
  * @returns {function}
  * @see {@link Array.prototype.includes}
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.includes}
  */
export default function contains<Value>(value: Value): <Values extends readonly any[]>(values: Values) => values is Values & readonly [...Values[number], Value ,...Values[number]][];
export var then : (resolve: (value: typeof contains) => any) => any;
