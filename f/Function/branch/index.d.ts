import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

export default function branch
      <ValueRight, ReturnRight> (right : (value: ValueRight) => ReturnRight)
  :   <ValueLeft,  ReturnLeft>  (left  : (value: ValueLeft & ValueRight) => ReturnLeft)

  =>  <ReturnBrach>             (call: (right: ReturnRight) => (left: ReturnLeft) => ReturnBrach)
  =>  (value: ValueLeft & ValueRight)
  =>  ReturnBrach
;

