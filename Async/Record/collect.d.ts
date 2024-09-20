import type { Right } from "../../Monad/right";
export default function collect<Collect extends Record<PropertyKey, PromiseLike<any>>>(collect: Collect): Right<{[K in keyof Collect]: Awaited<Collect[K]>}>
