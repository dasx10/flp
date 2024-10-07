type primitive = number | string | boolean | bigint | undefined | null;
export default function always<Value extends primitive>(value: Value): () => Value;
export default function always<Value>(value: Value): () => Value;
