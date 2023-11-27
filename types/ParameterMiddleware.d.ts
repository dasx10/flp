import type Middleware from "./Middleware";

type ParameterMiddleware<Call extends Middleware> = Call extends Middleware<infer Value>
  ? Value
  : unknown;

export default ParameterMiddleware;
