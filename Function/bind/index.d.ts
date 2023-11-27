import type Lambda from "../../types/Lambda";
declare var bind: <Value>(value: Value) => <Call extends Lambda<any, any>>(call: Call) => <Values extends Parameters<Call>>(...values: Values) => ReturnType<Call>;
export default bind;
