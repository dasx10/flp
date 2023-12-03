import type Lambda from "../../types/Lambda";
import type Constanta from "../../types/Constanta";
import type { Identity } from "../../Logic/identity";

/**
  * @see {@link https://tc39.es/ecma262/#sec-comma-operator} ecma262
  */
export default function tap<Value>(call: Lambda<Value, any>): Identity<Value>;
export default function tap(call: Constanta<any>): Constanta<void>;
