import type { Right } from "../Monad/right";
export default function promiseCollector<Collect extends Record<PropertyKey, PromiseLike<any>>>(collect: Collect): Promise<{[K in keyof Collect]: Awaited<Collect[K]>}>
