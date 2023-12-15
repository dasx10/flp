import type Lambda    from "../../../types/Lambda";

import type every from "..";

/**
  * @see {@link Array.prototype.every} native
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.every} ecma262
  * @see {@link every} similar
  */
export default function everyRight <Value>(call: Lambda<Value>): <Values extends readonly Value[]>(Values: Values) => boolean;
