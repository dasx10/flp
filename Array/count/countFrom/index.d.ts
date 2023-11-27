import type Lambda from "../../types/Lambda.d.ts";

declare var countFrom
   : <
       Size   extends number,
      _Test   extends Lambda<any, any> = Lambda<any, any>,
     __Values extends readonly any[]   = readonly Parameters<_Test>[0][],
   >(size: Size)
  => <
    Test    extends _Test & Lambda<Parameters<_Test>[0], any>,
    _Values extends readonly any[] = __Values & readonly Parameters<Test>[0][],
  >(test: Test)
  => <
    Values extends _Values
  >(values: Values)
  => number;

export default countFrom;
