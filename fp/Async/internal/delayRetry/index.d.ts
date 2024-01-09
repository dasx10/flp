import type Constanta from "../../../types/Constanta";

export default function _delayRetry<Call extends Constanta<any>>(call: Call, value: any, length: number, freeze: number): ReturnType<Call> extends Promise<any>
  ? ReturnType<Call>
  : Promise<ReturnType<Call>>;
