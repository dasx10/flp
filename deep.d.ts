type RecordDeepCircle<Key extends PropertyKey, Value> = { readonly [key in Key]: (Value | RecordDeepCircle<Key, Value>) };

export type Deep<Value, Keys extends readonly PropertyKey[]> = Keys extends readonly [infer Key, ...infer Tail]
  ? { readonly [key in Key]: Deep<Value, Tail> }
  : Keys extends readonly []
    ? Value
    : Keys extends readonly (infer Key)[]
      ? { readonly [key in Key] : Value | RecordDeepCircle<Key, Value> }
      : unknown
;

function deep<Keys extends readonly PropertyKey[]>(keys: Keys): <Value>(value: Value) => Deep<Value, Keys>;
