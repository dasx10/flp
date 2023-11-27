import type Falsy from "../../types/Falsy";

import type complement from "../complement";

/**
  * @see {@link https://tc39.es/ecma262/#sec-logical-not-operator} ecma262
  * @see {@link complement} similar
  */
export default function not(value: Falsy): true;
export default function not(value: true | readonly any[]): false;
export default function not<Value>(value: Value): value is Extract<Falsy, Value>;
