import type { TrimEnd   } from "../trimEnd";
import type { TrimStart } from "../trimStart";

import type prototype from "../../Adapter/prototype";

import type trimStart from "./start";
import type trimEnd   from "./end";

export type Trim<Value extends string> = string extends Value
  ? string
  : TrimStart<TrimEnd<Value>>
;

/**
  * @description
  * Removes the leading white space and line terminator characters from a string.
  *
  * @see {@link String.prototype.trimEnd} native
  * @see {@link https://tc39.es/ecma262/#sec-string.prototype.trimend} ecma262
  * @see {@link trimStart} similar
  * @see {@link trimEnd} similar
  * @see {@link prototype} dependency
  *
  * @example
  * ```
  * trim('  hello  '); //=> 'hello'
  * ```
  */
export default function trim<Value extends string>(value: Value): Trim<Value>;
