/**
  * @description
  * Returns a slice of an array.
  * @see {@link Array.prototype.slice}
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.slice}
  * @example
  * slice(3)(5)([1, 2, 3, 4, 5]); // [4, 5]
  */
export default function slice<Next extends number>(next: Next)
   : <Value extends number>(value: Value)
  => <Values extends readonly any[]>(values: Values[]) => Value[number][]
