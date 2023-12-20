export default function findIndexAdapterFind<Index extends number, Value>(findIndex: (call: (value: Value) => any) => (values: readonly Value[]) => Index)
   : (call: (value: Value) => any)
  => <Values extends readonly Value[]>(values: Values) => Values[Index];
