export default function flip <Return, Next, Value>(call: (next: Next) => (value: Value) => Return): (value: Value) => (next: Next) => Return;
export default function flip <Return, Value>(call: () => (value: Value) => Return): (value: Value) => () => Return;
export default function flip <Return, Value>(call: (value: Value) => () => Return): () => (value: Value) => Return
