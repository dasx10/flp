import type IterateCall  from "../types/IterateCall";
import type ArrayFillAll from "../../types/Array/FillAll";

export default function map_<Values extends readonly any[]>(values: Values): <Return>(call: IterateCall<Return, Values[number], Values>) => ArrayFillAll<Values, Return>;
