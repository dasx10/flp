import type Int      from "./Int";
import type Unsigned from "./Unsigned";

type Uint<Value extends number> = Unsigned<Int<Value>>;
export default Uint;
