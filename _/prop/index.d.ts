export default function (): <Value, Key>(value: Value | Partial<Record<Key, any>>, key: Key | keyof Value) => Value[Key];
