import type Index     from "../../../../types/Index";
import type Lambda    from "../../../../types/Lambda";
import type Parameter from "../../../../types/Parameter";

declare var findLastIndex: <
  Call extends Lambda<any, any>,
  _Values extends Parameter<Call>[] = Parameters<Call>[],
>(call: Call)
  => <Values extends Parameters<Call>>(values: Values) => Index | -1;

export default findLastIndex;
