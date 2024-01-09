import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var notIfElse
   : <
        Test    extends Lambda<any, any>,
       _Reject  extends Lambda<Parameter<Test>, any> = Lambda<Parameter<Test>, any>,
      __Resolve extends Lambda<Parameter<Test>, any> = Lambda<Parameter<Test>, any>,
     ___Value   extends Parameter<Test> & Parameter<__Resolve> & Parameter<_Reject> = Parameter<Test> & Parameter<__Resolve> & Parameter<_Reject>
   >(test: Test)
  => <
      Reject   extends   _Reject,
     _Resolve extends  __Resolve = __Resolve,
    __Value  extends ___Value & Parameter<Reject> & Parameter<_Resolve> = Parameter<Test> & Parameter<__Resolve> & Parameter<_Reject>
  >(reject: Reject)
  => <
     Resolve  extends  _Resolve,
    _Value   extends __Value & Parameter<Resolve> = __Value & Parameter<Resolve>
  >(resolve: Resolve)
  => <Value extends _Value>(value: Value)
  => ReturnType<Reject> | ReturnType<Resolve>;

export default notIfElse;
