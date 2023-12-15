import type Lambda from "./Lambda";

type Conveyor<
  Return,
  Value = any,
  Next  = any,
> = Lambda<Lambda<Return, Value>, Next>;

export default Conveyor;
