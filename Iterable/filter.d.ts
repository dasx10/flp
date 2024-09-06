export default function filter<Predicate, X>(test: (x: X) => x is Predicate): (values: Iterable<X>) => ({ [Symbol.iterator]: Generator<Predicate, void, void> })
export default function filter<X>(test: (x: X) => any): (values: Iterable<X>) => ({ [Symbol.iterator](): Generator<X, void, any> })
