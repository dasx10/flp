type _RecordDeep<Keys extends readonly PropertyKey[], Value> = Keys extends readonly [infer Key, ...infer Tail]
  ? Record<Key, _RecordDeep<Tail, Value>>
  : Value
;

type RecordCircle<Key, Value> = Key extends PropertyKey
  ? Record<Key, Value | RecordCircle<Key, Value | undefined>>
  : unknown
;

type RecordDeep<Keys extends readonly PropertyKey[], Value = unknown> = Keys extends readonly [infer Key, ...infer Tail]
  ? Record<Key, _RecordDeep<Tail, Value>>
  : Keys extends readonly []
    ? Value
    : RecordCircle<Keys[number], Value>
;

export default RecordDeep;
