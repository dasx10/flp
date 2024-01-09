import type Falsy from "../../types/Falsy";

import type complement from "../complement";

type Trusty = true | readonly any[] | {} | Function | symbol;

/**
  * @summary `y = !x`
  * @function `x => !x`
  * @name not
  * @param {Value} value
  * @returns {boolean} boolean
  * @see {@link https://tc39.es/ecma262/#sec-logical-not-operator} ecma262
  * @see {@link complement} similar
  * @example
  * ```
  * not(true); // false
  * not(false); // true
  * not(0); // true
  * not(1); // false
  * not(-1); // false
  * not(NaN); // true
  * not(Infinity); // false
  * not(-Infinity); // false
  * not(''); // true
  * not('a'); // false
  * not([]); // false
  * not([1]); // false
  * not({}); // false
  * not({a: 1}); // false
  * ```
  */
export default function not(value: Falsy): true;
export default function not(value: Trusty): false;
export default function not<Value>(value: Value): value is Extract<Falsy, Value>;
