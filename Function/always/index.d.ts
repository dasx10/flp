import type Constanta from "../../types/Constanta";

import type identity from "../../Logic/identity";
import type skip     from "../skip";

/**
  * @name always
  * @alias constant
  * @example
  * var one = always(1);
  * one(); // 1
  * one(2); // 1
  *
  * var testObject = {};
  * var emptyObject = always(testObject);
  * emptyObject() === testObject; // true
  * emptyObject(2) === emptyObject(3); // true
  *
  * @see {@link skip}
  * @see {@link identity}
  */
export default function always<Value>(value: Value) : Constanta<Value>;
