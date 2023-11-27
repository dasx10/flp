export default function curry3<Return>(call: () => Return): () => () => () => Return
export default function curry3<Value, Return>(call: (value: Value ) => Return): () => (next: Next) => Return
export default function curry3<Value, Next, Return>(call: (value: Value, next: Next) => Return): (value: Value) => (next: Next) => () => Return
export default function curry3<X, Y, Z, Return>(call: (x: X, y: Y, z: Z) => Return): (x: X) => (y: Y) => (z: Z) => Return
