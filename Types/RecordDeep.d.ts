type RecordDeep<Keys extends readonly PropertyKey[], Value = unknown> = Keys extends readonly [infer Key, ...infer Tail]
  ? Record<Key, RecordDeep<Tail, Value>>
  : Value
;

export default RecordDeep;
