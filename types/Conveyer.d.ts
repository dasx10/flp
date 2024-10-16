import type Lambda from "./Lambda";
type Conveyer<Return, Value, Next> = Lambda<Lambda<Return, Next>, Value>;
export default Conveyer;
