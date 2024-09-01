export type First<Values extends readonly any[]> = Values extends readonly [infer First, ...any]
  ? First
  : Values extends readonly []
    ? never
    : Values[0]
;

export default function first<Value>(values: readonly [Value, ...any]): Value;
export default function first(values: readonly []): undefined;
export default function first<Value>(values: readonly Value[]): Value | undefined;
