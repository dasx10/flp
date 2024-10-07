export default function paramSyncFunction<Exec extends (call: (value: *) => *) => *>(exec: Exec): Exec;
