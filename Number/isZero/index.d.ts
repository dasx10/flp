import type { IS } from "../../internal/is";

export default function is0(value: 0): true;
export default function is0(value: number): value is 0;
export default function is0<Value extends number>(value: Value): IS<0, Value>;
