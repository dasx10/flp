export default function promiseCatch<Return>(call: (x: unknown) => Return): <Value extends Promise<any>>(value: Value) => Value | Promise<Awaited<Return>>;
