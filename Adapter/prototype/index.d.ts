import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

/**
  * It takes a prototype method as a basis and returns a lambda function similar in properties to that prototype.
  * It only utilizes a single input parameter.
  * @example
  * var find = prototype(Array.prototype.find);
  * var findByXOne = find((value) => value.x === 1)
  * findByXOne([{ x: 1 }, { x: 2 }, { x: 3 }]); //=> { x: 1 }
  */
export default function prototype<Call extends Lambda<any, any>>(call: Call): <Value extends Parameter<Call>>(value: Value) => <Context>(context: Context) => ReturnType<Call>;
