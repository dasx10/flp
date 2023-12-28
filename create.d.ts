import type Constanta from "./types/Constanta";
import type Lambda    from "./types/Lambda";

export default function create(value: string): {
  (keys: string[]) : Promise<(Constanta | Lambda)[]>
  [key: string]    : Promise<Constanta | Lambda>;
};
