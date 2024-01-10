export type Props<Keys extends readonly PropertyKey[], Value extends Record<PropertyKey, any> & Partial<Record<Keys, any>>> =
  Keys extends readonly [infer Key, ...infer Rest]
    ? [Value[Key], ...Props<Rest, Value>]
    : Keys extends readonly []
      ? []
      : Keys extends readonly [...infer Property]
        ? Value[Property][]
        : [] | Value[Keys[number]][];

declare var props: <Keys extends readonly PropertyKey[]>(keys: Keys) => <Value extends Record<PropertyKey, any> & Partial<Record<Keys, any>>>(value: Value) => Props<Keys, Value>;
export default props;
