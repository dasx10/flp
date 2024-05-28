export type Nothing = {
  (): Nothing;
  then(call?: (value: void) => any): Nothing;
}

declare const nothing: Nothing;
export default nothing;
