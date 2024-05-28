type ParametersRecord<Value extends Record<PropertyKey, (value: any) => any>> = Value extends Record<PropertyKey, (value: infer Parameter) => any>
  ? Parameter
  : unknown
;

export default function renew<
  Constructors extends Record<PropertyKey, (value: any) => any>
>(constructors: Constructors) : (value: ParametersRecord<Constructors>) => { [Key in keyof Constructors]: ReturnType<Constructors[Key]> }
