export default function paramSyncFunction<Exec extends (call: (value: any) => any) => any>(exec: Exec): Exec;
