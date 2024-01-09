declare var erase
   : <
      Search extends Parameters<String["replace"]>[0],
     _Value  extends string = string
   >(search: Search)
  => <Value extends _Value>(value: Value) => string;

export default erase;
