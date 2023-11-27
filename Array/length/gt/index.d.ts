import type Index from "../../types/Index";

declare var lengthGt: <
   Length extends Index,
  _Values extends readonly any[],
>(length: Length) => <
  Values extends _Values,
>(values: Values) => boolean;

export default lengthGt;
