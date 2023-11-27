import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

import type everyRight from "./right";

/**
  * @see {@link Array.prototype.every} native
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.every} ecma262
  * @see {@link everyRight} similar
  */
export default function every<Call extends Lambda<any, any>>(call: Call): <Values extends readonly Parameter<Call>>(values: Values) => boolean;
