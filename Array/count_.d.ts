import type ArrayIndex from "../Types/ArrayIndex";
export default function count_<Values extends readonly any[]>(values: Values): (call: (value: Values[number]) => any) => ArrayIndex<Values> | Values['length'];
