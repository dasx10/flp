import type { Right } from "../Monad/right";
import type PromiseValue from "../Types/PromiseValue";
export default function collector<Collect extends Record<PropertyKey, PromiseLike<any>>>(collect: Collect): Right<{[K in keyof Collect]: PromiseValue<Collect[K]>]}>
