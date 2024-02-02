import type Index from "../../types";
export type ArrayRemoveRight<Values extends readonly any[], Key extends Index<Values>> = Values[number][];
export default function _removeRight<Values extends readonly any[], Key extends Index<Values>>(values: Values, index: Index): ArrayRemoveRight<Values, Key>;
