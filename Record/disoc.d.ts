export default function disoc<Key extends PropertyKey>(key: Key): <Target extends Record<PropertyKey, any>>(target: Target | { [K in Key]?: any }) => Omit<Target, Key>;
