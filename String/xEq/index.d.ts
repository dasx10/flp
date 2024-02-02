import type Lambda from "../../types/Lambda";

declare var xEq
   : <Next extends string>(next: Next)
  => <Call extends Lambda<boolean, any>>(call: Call)
  => <Value extends string>(value: Value)
  => ReturnType<Call>

export default xEq;
