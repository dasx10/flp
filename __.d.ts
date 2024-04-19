import type Conveyer from "./Types/Conveyer";
import type Lambda from "./Types/Lambda";
export default function __<Z>(z: Z): <Return, X, Z1 extends Z = Z>(y: Conveyer<Return, Z1, X>) => Lambda<Return, X>
