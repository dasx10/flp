import type Constanta from "../../../types/Constanta";
export default function _pause<Call extends Constanta<any>>(call: Call, time: number): Promise<ReturnType<Call>>;
