import type Constanta from "./Constanta";
import type Lambda    from "./Lambda";

type Parameter<Call> = Parameters<Call>[0];
export default Parameter;
