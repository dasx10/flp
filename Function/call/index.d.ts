import type Constanta from "../../types/Constanta";

/**
  * @example
  * call(() => 1); // 1
  */
declare var call: <Exec extends Constanta<any>>(exec: Exec) => ReturnType<Exec>;
export default call;
