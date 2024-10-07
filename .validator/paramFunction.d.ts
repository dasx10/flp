export default function paramFunction<Exec extends (call: (value: any) => any) => any>(exec: Exec): Exec;
