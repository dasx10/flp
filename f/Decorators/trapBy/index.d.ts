export default function trapBy <Value>(test: (value: Value) => any): <Call extends (value: Value) => Promise<any>>(call: Call) => Call;
