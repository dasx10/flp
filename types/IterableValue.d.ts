type IterableValue<X extends Iterable<any>> = X extends Iterable<infer T> ? T : never;
export default IterableValue;
