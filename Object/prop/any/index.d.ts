declare var propAny: <Keys extends readonly PropertyKey[]>(keys: Keys) => <
  Object extends Partial<Record<PropertyKey, unknown>>
>(value: Object) => Object extends Partial<Record<Keys[number], infer Value>>
  ? Value
  : undefined;


export default propAny;
