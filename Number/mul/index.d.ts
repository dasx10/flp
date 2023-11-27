/**
  * @summary multiplicative 2 numbers
  * @description
  * It multiplies two numbers and returns the result.
  * @function
  * @name mul
  * @alias multiply
  * @param {number} next number
  * @see {@link https://tc39.es/ecma262/#sec-multiplicative-operators} ecma262
  * @example
  * ```
  * var mul2 = mul(2);
  * mul2(4); //=> 8
  * mul2(5); //=> 10
  * var mul3 = mul(3);
  * mul3(4); //=> 12
  * mul3(5); //=> 15
  * ```
  */
export default function mul(next: 0): (value: number) => 0;
export default function mul(next: 1): <Value extends number>(value: Value) => Value;
export default function mul<Next extends number>(next: Next): {
  (value: 0): 0;
  (value: 1): Next;
  <Value extends number>(value: Value): Exclude<number, Exclude<Value, 0 | 1> | Exclude<Next, 0 | 1>>
};
