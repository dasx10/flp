import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var nothing: <
  Values extends readonly Lambda<any, any>[],
  _Value extends Parameter<Values[number]> = Parameter<Values[number]>
>(values: Values) => <Value extends _Value>(value: Value) => boolean;

export default nothing;
