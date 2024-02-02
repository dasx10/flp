export default function prop<Key extends PropertyKey>(key: Key): <Value extends Record<PropertyKey, any>>(value: Value | Partial<Record<Key, Value[Key]>>) => Value[Key];
