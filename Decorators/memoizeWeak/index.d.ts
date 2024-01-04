import type Lambda from "../../types/Lambda";
import type memo from "../index";

/**
  * It memorizes the result of computation for a parameter. Upon the next request, it returns the memorized result if the parameter is the same.
  * This function exclusively operates with objects as parameters, utilizing weak references and utilizing a WeakMap as a storage mechanism.
  * @see {@link memo}
  * @see {@link WeakMap}
  */
export default function memoizeWeak<Call extends Lambda>(call: Call): Call;
