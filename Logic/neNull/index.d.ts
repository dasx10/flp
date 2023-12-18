export default function neNull(value: null): false;
export default function neNull<Value>(value: Value): value is Exclude<Value, null>;
