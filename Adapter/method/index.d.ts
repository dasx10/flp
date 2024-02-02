import type Constanta from "../../types/Constanta";

import type prototype from "../prototype";

import type trim      from "../../String/trim";
import type trimRight from "../../String/trimRight";


/**
  * @summary convert method to lambda
  * @description
  * It takes a prototype method as a basis and returns a lambda function similar in properties to that prototype.
  * It only utilizes a empty or partial single input parameter.
  *
  * @see {@link prototype} similar
  *
  * @example
  *
  * ```
  * var trim = method(String.prototype.trim);
  * trim('  hello  '); //=> 'hello'
  * ```
  *
  * @see {@link trim} uses
  * @see {@link trimRight} uses
  */
export default function method<Call extends Constanta<any> | ((value?:any) => any)>(call: Call): <Context>(value: Context) => ReturnType<Call>;
