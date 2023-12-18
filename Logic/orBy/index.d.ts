export default function orBy<Return, Value>(call: (value: Value) => Return)
   : (next  : Value)
  => (value : Value)
  => Return
;
