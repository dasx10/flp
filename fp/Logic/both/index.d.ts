import type Lambda from "../../types/Lambda";

import type also from "../also";

/**
  * @see {@link also}
  */
export default function both<Value>(next: Lambda<any, Value>): <Return>(call: Lambda<Return, Value>) => (value: Value) => false | Return;
