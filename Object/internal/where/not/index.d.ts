import type { WhereObject } from "..";

export default function _whereNot
<
 Value extends Record<PropertyKey, any>,
 Test  extends WhereObject<Value>
>(value: Value, test: Test) : boolean;

