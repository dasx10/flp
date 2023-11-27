import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var by: <Exec extends Lambda<any, any>>(exec: Exec)
             => <Call extends Lambda<Parameter<Exec>, Lambda<Parameter<Exec>>, any>>(call: Call)
             => <Next extends Parameter<Exec>>(next: Next)
             => <Value extends Parameter<Exec>>(value: Value)
             => ReturnType<ReturnType<Call>>;

export default by;
