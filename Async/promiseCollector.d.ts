import type { Right } from "../Monad/right";
import type PromiseValue from "../Types/PromiseValue";
export default function promiseCollector<Collect extends Record<PropertyKey, PromiseLike<any>>>(collect: Collect): Promise<{[K in keyof Collect]: PromiseValue<Collect[K]>}>
