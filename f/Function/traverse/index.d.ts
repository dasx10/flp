export default function traverse <Return, Next, Value>(call: (next: Next) => (value: Value) => Return)
  : <Values extends readonly Next[]>(values: Values)
  => (value: Value)
  => Return
;
