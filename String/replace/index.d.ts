declare var replace
   : <
     Search       extends Parameters<String["replace"]>[0],
    _ReplaceValue extends Parameters<String["replace"]>[1] = Parameters<String["replace"]>[1],
    __Value       extends string                           = string
   >(search: Search)
  => <
    ReplaceValue extends _ReplaceValue,
    _Value       extends __Value = __Value,
  >(replaceValue: ReplaceValue)
  => <Value extends _Value>(value: Value) => string;

export default replace;
