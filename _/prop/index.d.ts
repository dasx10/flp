export default function _prop(): <Value, Key>(value: Value | Partial<Record<Key, any>>, key: Key | keyof Value) => Value[Key];
