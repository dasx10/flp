import type { Max } from "../internal/max";

export default function neg(value: -1): -1;
export default function neg(value: 0): 0;
export default function neg(value: 1): 0;
export default function neg<Value extends number>(value: Value): Max<0>;
