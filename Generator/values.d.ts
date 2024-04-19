import type ArrayIndex from "../Types/ArrayIndex";
export default function*values<X extends readonly any[]>(x: X): Generator<X[ArrayIndex<X>], void, void>;
export default function*values<X extends Record<PropertyKey, any>>(x: X): Generator<X[keyof X], void, void>;
