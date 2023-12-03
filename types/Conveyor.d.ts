import type Lambda from "./Lambda";

type Conveyor<
  Return extends any = any,
  Value  extends any = any,
  Next   extends any = any,
> = Lambda<Lambda<Return, Value>, Next>;

export default Conveyor;
