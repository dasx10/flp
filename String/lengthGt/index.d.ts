import type Index      from "../../types/Index";
import type { GT }     from "../../Number/gt";
import type { Length } from "../length";

declare var lengthGt
   : <Test extends Index>(test: Test)
  => <Value extends string>(value: Value)
  => GT<Length<Value>, Test>

export default lengthGt;
