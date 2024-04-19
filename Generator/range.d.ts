import type ArgumentInt from "../Types/ArgumentInt";
import type Lambda from "../Types/Lambda";
export default function range<Y extends number>(y: ArgumentInt<Y>): <X extends number>(x: ArgumentInt<X>) => Generator<number, void, void>;
