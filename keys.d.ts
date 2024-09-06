import type ArrayIndex from "../Types/ArrayIndex";
export default function*keys<X extends readonly any[]>(x: X): Generator<`${ArrayIndex<X>}`, void, void>;
export default function*keys<X extends Record<PropertyKey, any>>(x: X): Generator<`${keyof X}`, void, void>;
