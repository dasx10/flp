import type Lambda from "../../types/Lambda";
declare var or: <Next, _Value = any>(next: Next) => Lambda<_Value, Next | Value>;
export default or;
