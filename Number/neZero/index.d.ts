export default function neZero(value: 0): false;
export default function neZero<Value extends number>(value: Value): value is Exclude<Value, 0>;
