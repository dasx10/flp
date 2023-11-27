import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var flow : <
    Exec extends Lambda<any, any>,
   _Call extends Lambda<Lambda<any, Parameter<Exec>>, any> = Lambda<Lambda<any, Parameter<Exec>>, any>,
  __Next extends Parameter<_Call> = Parameter<_Call>,
>(exec: Exec)
  => <
    Call extends _Call,
   _Next extends __Next = Parameter<_Call>
  >(call: Call)
  => <
    Next extends _Next
  >(next: Next) => ReturnType<Call>
;

export default flow;
