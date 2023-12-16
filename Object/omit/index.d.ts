export default function omit<Keys>(keys: readonly Keys[]): <Value>(value: Value | Partial<Record<Keys, any>>) => Omit<Value, Keys>;
