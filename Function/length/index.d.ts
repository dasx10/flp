import type { Length as ArrayLength } from "../../Array/length"

export type Length<Call extends (...value: any[]) => any> = ArrayLength<Parameters<Call>>;

declare var length: <Call extends (...value: any[]) => any>(call: Call) => Length<Call>;
export default length;
