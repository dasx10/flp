export default function ne0(value: 0): false;
export default function ne0<Value extends number>(value: Value): value is Exclude<Value, 0>;
