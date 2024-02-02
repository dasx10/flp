import type Falsy from "../../types/Falsy";
import type Lambda from "../../types/Lambda";

import type not from "../not";

/**
  * @function `x => y => !x(y)`
  * @name complement
  * @see {@link https://tc39.es/ecma262/#sec-logical-not-operator} ecma262
  * @see {@link not} similar
  */
export default function complement<Value>(call: Lambda<Value, Falsy>): (value: Value) => true;
export default function complement<Return, Value>(call: Lambda<Value, Return>): (value: Value) => value is Extract<Falsy, Value>;
