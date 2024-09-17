export default function fail<Return>(call: (x: unknown) => Return): <Value extends Promise<any>>(value: Value) => Value | Promise<Awaited<Return>>;
