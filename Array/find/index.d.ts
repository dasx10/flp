import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var find: {
  <Type>(call: (value: any) => value is Type)
    : <Values extends readonly Parameter<typeof call>[]>(values: Values)
   => Type | void;

  <
    Predicate extends Lambda<any, any>,
    _Values   extends readonly Parameter<Predicate>[] = readonly Parameter<Predicate>[],
  >(call: Predicate)
   :<Values extends _Values>(values: Values)
  => Values[number] | void;
}

export default find;
