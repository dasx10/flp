declare var xGt: <Call extends (value: boolean) => any>(call: Call) => <Value extends number>(value: Value) => ReturnType<Call>;
export default xGt;
