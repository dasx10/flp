export default function concat<Y>(y: Iterable<Y>): <X>(x: Iterable<X>) => Generator<X | Y, void, void>;
