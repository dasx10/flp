export default function exists<Keys>(keys: Keys): <Value>(value: Value | Partial<Record<Keys, any>>) => boolean;
