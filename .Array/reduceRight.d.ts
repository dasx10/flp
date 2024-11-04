import type Conveyer from "../../Types/Conveyer";
export default function reduceRight<Return, Value>(call: Conveyer<Return, Value, Return>): (value: Return) => (values: readonly Value[]) => Return;
