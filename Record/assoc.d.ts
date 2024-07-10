export default function assoc<Key extends PropertyKey>(key: Key): <Value>(value: Value) => {
  (target: null | undefined): Record<Key, Value>;
  <Target extends Record<PropertyKey, any>>(target: Target): Target & Record<Key, Value>
};
