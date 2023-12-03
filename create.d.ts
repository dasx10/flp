import type Constanta from "./types/Constanta";
import type Lambda    from "./types/Lambda";
export default function create(value: string): Partial<Record<string, Promise<Lambda | Constanta>>>;
