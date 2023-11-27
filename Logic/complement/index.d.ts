import type Falsy from "../../types/Falsy";

import type not from "../not";

/**
  * @see {@link https://tc39.es/ecma262/#sec-logical-not-operator} ecma262
  * @see {@link not} similar
  */
export default function complement<Value>(call: (value: Value) => Falsy): (value: Value) => true;
export default function complement<Return, Value>(call: (value: Value) => Return): (value: Value) => value is Extract<Falsy, Value>;
