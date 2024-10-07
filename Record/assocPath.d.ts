export default function assocPath<Keys extends Iterable<PropertyKey>>(keys: Keys): <Value>(value: Value) => Record<Keys[number], Value>;
export var then: <Value>(resolve: (value: Record<PropertyKey, Value>) => any) => any;
