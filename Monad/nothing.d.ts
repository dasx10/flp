export type Nothing = {
  ()         : Nothing;
  then(call? : (value: void) => any): Nothing;
  toString   : ()=>"";
  valueOf    : ()=>void;
  toJSON     : ()=>null,
}

declare const nothing: Nothing;
export default nothing;
