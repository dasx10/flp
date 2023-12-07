import type Constanta from "../../types/Constanta";

export default function pause(freeze: number): <Call extends Constanta>(call: Call) => ReturnType<Call> extends Promise<any>
  ? ReturnType<Call>
  : Promise<ReturnType<Call>>
;
