import type Lambda    from "../../types/Lambda";
import type Constanta from "../../types/Constanta";
import type Parameter from "../../types/Parameter";

export type Lift<Call extends Lambda<Lambda<any, any>, any>> = Parameter<Parameter<Call>>;

/**
  * @example
  * var findJohn = find(name => name == "John");
  * var maybeUser = maybe(findJohn(users));
  * var maybeAge = maybe(prop("age"));
  * var userAge = lift(maybeAge); // => number | undefined
  *
  * // or equally
  * pipe([findJohn, maybe, ap(prop("age")), lift])(users); //=> number | undefined
  */
export default function lift<Call extends Lambda<Lambda<any, any> | Constanta<any>, any>>(call: Call): Lift<Call>;
