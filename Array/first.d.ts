export default function first<Value>(values: readonly [Value, ...any]): Value;
export default function first(values: readonly []): undefined;
export default function first<Value>(values: readonly Value[]): Value | undefined;
