import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var any
   : <Call extends Lambda<any, any>>(call: Call)
  => <Values extends readonly Parameter<Call>[]>(values: Values)
  => Parameters<Call>;

export default any;
