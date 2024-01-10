import type Lambda from "../../types/Lambda";

import type both from "../both";

/**
  * @see {@link both}
  */
export default function also<Return, Value>(next: Lambda<Return, Value>): (call: Lambda<any, Value>) => (value: Value) => false | Return;
