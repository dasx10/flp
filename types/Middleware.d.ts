import type Lambda from "./Lambda";

type Middleware<
  Value  = any,
  Return = any,
  Next   = any,
> = Lambda<Lambda<Value, Return>, Next>

export default Middleware;
