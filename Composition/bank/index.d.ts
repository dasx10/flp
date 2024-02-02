declare const bank: <Values extends readonly ((value: any) => any)>(values: Values) => <Value extends Parameters<Values[number]>[0]>(value: Value) => ReturnType<Values[number]>[];
export default bank;
