export default function*flat<X>(x: Iterable<Iterable<X>>): Generator<X, void, void>;
