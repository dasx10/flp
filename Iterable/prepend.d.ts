export default function prepend<Y>(y: Y): <X>(x: Iterable<X>) => Generator<Y | X, void, void>;
