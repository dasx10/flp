import type { WhereObject } from "..";
import type Lambda    from "../../../../types/Lambda";
import type Parameter from "../../../../types/Parameter";

export default function _whereNot
<
 Value extends Record<PropertyKey, any>,
 Test  extends WhereObject<Value>
>(value: Value, test: Test) : boolean;

