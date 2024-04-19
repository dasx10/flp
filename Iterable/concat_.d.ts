export default function concat_<Y>(y: Iterable<Y>): <X>(x: Iterable<X>) => Generator<Y | X, void, void>;
