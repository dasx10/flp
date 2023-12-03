type IteratePredicate = <Value, Is extends Value>(value: Value | Is, index: number, values: readonly (Value | Is)[]) => value is Is;
export default IteratePredicate;
