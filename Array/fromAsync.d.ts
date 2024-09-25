import type { Right } from "../Monad/right";
import type MayAsyncIterable from "../Types/MayAsyncIterable";

export default function fromAsync<X>(values: MayAsyncIterable<X>): Right<null>
