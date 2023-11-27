declare var template
   : <
    ReplaceValue extends Parameters<String["replace"]>[1],
     _Search     extends Parameters<String["replace"]>[0] = Parameters<String["replace"]>[0],
    __Value      extends string                           = string
   >(replaceValue: ReplaceValue)
  => <
    Search extends _Search,
    _Value extends __Value = __Value,
  >(search: Search)
  => <Value extends _Value>(value: Value) => string;

export default template;
