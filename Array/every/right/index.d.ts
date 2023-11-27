import type Lambda    from "../../../types/Lambda";
import type Parameter from "../../../types/Parameter";

import type every from "..";

/**
  * @see {@link Array.prototype.every} native
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.every} ecma262
  * @see {@link every} similar
  */
export default function everyRight <Call extends Lambda<any, any>>(call: Call): <Values extends readonly Parameter<Call>>(Values: Values) => boolean;
