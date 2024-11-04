import type TrimLeft  from "./TrimLeft.d.ts";
import type TrimRight from "./TrimRight.d.ts";

type Trim <Value extends string> = TrimLeft<TrimRight<Value>>;
export default Trim;
