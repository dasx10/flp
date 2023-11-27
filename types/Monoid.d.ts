import type Lambda from "./Lambda";

type Monoid<Type, Result extends Type = Type> = <
   Next  extends Type,
  _Value extends Type = Type,
>(next: Next) => Lambda<_Value, Result>

export default Monoid;
