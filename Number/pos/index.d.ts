import type NumberExcludeNegative from "../types/NumberExcludeNegative";

export default function pos(number: -1): 0;
export default function pos(number: 0): 0;
export default function pos(number: 1): 1;
export default function pos<Value extends number>(value: Value): NumberExcludeNegative<Value> | 0;
