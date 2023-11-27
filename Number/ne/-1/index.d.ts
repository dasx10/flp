export default function neMinus1(value: -1): false;
export default function neMinus1<Value extends number>(value: Value): value is Exclude<Value, -1>;
