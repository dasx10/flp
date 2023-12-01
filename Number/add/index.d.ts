import NumberExclude from "../types/NumberExclude";

/**
  * `Monoid` `Math`
  * Increments a number. Add 1 to the number.
  * @example
  * var inc = add(1);
  * inc(2); // 3
  * inc(3); // 4
  */
export default function add(next: 0): <Value extends number>(value: Value) => Value;
export default function add<Next extends number>(next: Next): {
  (value: 0): Next;
  <Value extends number>(value: Value): NumberExclude<number, NumberExclude<Value, 0> | NumberExclude<Next, 0>>
}
