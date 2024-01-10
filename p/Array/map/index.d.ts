import type ArrayFillAll           from "../../../types/Array/FillAll";
import type ArrayValue             from "../../../types/Array/Value";
import type ArrayIterateCallValues from "../../../types/Array/IterateCallValues";

export default function map<Values extends readonly any[], Return>(values: Values, call: ArrayIterateCallValues<Return, Values>): ArrayFillAll<Values, Return>;
