export default function filterByPropIsMemo<Key extends PropertyKey>(key: Key): <Test>(test: Test) => {
  <Values extends readonly Partial<Record<Key, Test>>[]>(values: Values): Values | [] | Value[];
  <Values extends readonly Partial<Record<PropertyKey, Test>>[]>(value: Values): [] | Record<Key, Test>[];
}
