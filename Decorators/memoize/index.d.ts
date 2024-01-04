import type Lambda from "../../types/Lambda";

import type indexed    from "../../Array/indexed";
import type memoWeak   from "./weak";
import type memoCreate from "./create";

/**
  * `Decorator`
  *
  * It memorizes the result of computation for a parameter. Upon the next request, it returns the memorized result if the parameter is the same.
  *
  * @see {@link memoWeak}
  * @see {@link memoCreate}
  * @see {@link Map}
  * @see {@link indexed}
  */
export default function memoize<Call extends Lambda<any, any>>(call: Call): Call;
