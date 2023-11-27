import type Middleware          from "../../types/Callback";
import type ParameterMiddleware from "../../types/ParameterMiddleware";
import type Lambda              from "../../types/lambda";

declare var parallel: <
  Values extends readonly Middleware[],
  _Then  extends Lambda<ParameterMiddleware<Middleware>[], any>
>(values: Values) => <Then extends _Then>(then: Then) => Values;

export default parallel;
