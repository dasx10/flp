import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var findLast: {
  <Value, Type>(call: (value: Value, ...values: readonly any[]) => value is Type)
    : <Values extends readonly Value[]>(values: Values)
   => Type | void;

  <
    Predicate extends Lambda<any, any>,
    _Values   extends readonly Parameter<Predicate>[] = readonly Parameter<Predicate>[],
  >(call: Predicate)
   :<Values extends _Values>(values: Values)
  => Values[number] | void;
}

export default findLast;
