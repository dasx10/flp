export default function every<Predicate, X>(test: (x: X) => x is Predicate): <Values extends Iterable<X>>(values: Values) => values is (Iterable<Predicate> & Values);
export default function every<X>(test: (x: X) => any): (values: Iterable<X>) => boolean;
