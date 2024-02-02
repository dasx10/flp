import type Conveyor  from "../../types/Conveyor";
import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

export default function byOf
     <Return, Value>(call: Conveyor<Return, Value, Value>)
   : <ExecValue>(exec: Lambda<Value, ExecValue>)
  => Conveyor<Return, ExecValue, ExecValue>
 ;
