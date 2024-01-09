export default function findIndexAdapterSome<Index extends number, Value>(findIndex: (call: (value: Value) => any) => (values: readonly Value[]) => Index)
   : (call: (value: Value) => any)
  => <Values extends readonly Value[]>(values: Values) => boolean;
