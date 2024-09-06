type ParametersRecord<Value extends Record<PropertyKey, (value: any) => any>> = Value extends Record<PropertyKey, (value: infer X) => any>
  ? X
  : unknown
;

export default function re<
  Constructors extends { [key in PropertyKey]: (value: any) => any }
>(constructors: Constructors) : (value: ParametersRecord<Constructors>) => { [Key in keyof Constructors]: ReturnType<Constructors[Key]> }

export var then: (resolve: (module: typeof re) => any) => any
