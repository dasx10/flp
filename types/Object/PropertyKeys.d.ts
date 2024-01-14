type PropertyKeys<Value> = Value extends object
  ? [keyof Value, ...PropertyKeys<Value[keyof Value]>]
  : []
;
