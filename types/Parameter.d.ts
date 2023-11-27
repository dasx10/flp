import type Constanta from "./Constanta";
import type Lambda    from "./Lambda";

type Parameter<Call extends Lambda<any, any> | Constanta<any>> = Parameters<Call>[0];
export default Parameter;
