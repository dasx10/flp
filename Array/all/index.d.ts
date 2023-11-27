import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var all
   : <Call extends Lambda<any, any>>(call: Call)
  => <Values extends readonly Parameter<Call>[]>(values: Values)
  => ReturnType<Call>;

export default all;
