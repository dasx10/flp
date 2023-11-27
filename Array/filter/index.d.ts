import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";
import type Predicate from "../../types/Predicate";

declare var filter: {
  <
     Value,
     Is,
    _Values extends readonly Value[] = readonly Value[],
  >(call: Predicate<Value, Is>): <Values extends _Values>(values: Values) => Is[] | [];

  <
     Call   extends Lambda<any, any>,
    _Values extends readonly Parameter<Call>[] = readonly Parameter<Call>[],
  >(call: Call): <Values extends _Values>(values: Values) => Values[number][] | [];
}

export default filter;
