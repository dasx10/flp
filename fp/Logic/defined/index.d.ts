export default function defined(value: undefined): false;
export default function defined(): false;
export default function defined<Value>(value: Value): value is Exclude<Value, undefined>;
