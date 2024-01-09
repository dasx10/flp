/**
  * @template {readonly PropertyKey[]} PropertyKeys
  * @param {PropertyKeys} keys
  * @returns {<Value extends Record<PropertyKey, any>>(value: Value) => Record<PropertyKeys[number], Value[PropertyKeys[number]]>}
  */
declare var pick
   : <
      Keys  extends readonly PropertyKey[],
     _Value extends Record<PropertyKey, any> | Partial<Record<Keys[number], any>> = Record<PropertyKey, any> | Partial<Record<Keys[number], any>>,
   >(keys: Keys)
  => <
    Value extends _Value,
  >(value: Value)
  => Pick<Value, Keys[number]>;

export default pick;
