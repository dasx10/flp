import type { ArrayLength } from "../../Array/length"

export type FunctionLength<Call extends (...value: any[]) => any> = ArrayLength<Parameters<Call>>;
export default function length<Call extends (...value: any[]) => any>(call: Call): FunctionLength<Call>;
