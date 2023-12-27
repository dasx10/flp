import type Constanta from "../../types/Constanta";

import type identity from "../../Logic/identity";
import type skip     from "../skip";

export type Always<Value> = Constanta<Value>

export type AlwaysCall<Type> = {
  (): Always<void>;
  <Value extends Type>(value: Value): Always<Value>;
}

/**
  * @function `x => _ => x`
  * @name always
  * @alias constant
  * @see {@link skip}
  * @see {@link identity}
  *
  * @example
  * ```
  * var one = always(1);
  * one(); // 1
  * one(2); // 1
  *
  * var testObject = {};
  * var emptyObject = always(testObject);
  * emptyObject() === testObject; // true
  * emptyObject(2) === emptyObject(3); // true
  *```
  */
export default function always       ()             : Always<undefined>;
export default function always<Value>(value: Value) : Always<Value>;
