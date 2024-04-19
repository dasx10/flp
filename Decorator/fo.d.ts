import type Conveyer from "../Types/Conveyer";
import type Lambda   from "../Types/Lambda";

export default function fo<X, Y>(replace: Lambda<Y, X>)
  : <Return, Y1, X1 extends Y = Y>(call: Conveyer<Return, Y1, X1>)
  => Conveyer<Return, Y1, X>
;
