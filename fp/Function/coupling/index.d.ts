import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var coupling
   : <Exec  extends Lambda<any, Lambda<any, any>>>(exec: Exec)
  => <Call  extends Lambda<any, Lambda<any, Parameter<ReturnType<Exec>>>>>(call: Call)
  => <Next  extends Parameter<Exec>>(next: Next)
  => <Value extends Parameter<Call>>(value: Value)
  => <Is    extends Parameter<ReturnType<Call>>>(is: Is)
  => ReturnType<ReturnType<Exec>>;

export default coupling;
