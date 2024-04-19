import type Conveyer from "../Types/Conveyer";
import type Lambda   from "../Types/Lambda";

export default function of<X, Y>(replace: Lambda<Y, X>)
  : <Return, X1, Y1 extends Y = Y>(call: Conveyer<Return, Y1, X1>)
  => Conveyer<Return, X, X1>
;
