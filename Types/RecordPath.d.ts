type RecordPath<Keys extends readonly PropertyKey[], Value> = Keys extends readonly [infer First, ...infer Tail]
  ? RecordPath<Tail, Value[First]>
  : Value
;

export default RecordPath;
