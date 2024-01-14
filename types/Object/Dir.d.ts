type RecordDir<Value, Keys extends readonly PropertyKey[]> = Keys extends readonly [infer Key, ...infer Next]
  ? RecordDir<Value[Key], Next>
  : Keys extends readonly []
    ? Value
    : Value | undefined | Value[Keys]
;

export default RecordDir;
