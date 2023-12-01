import type { Promises } from "..";

interface _NumberNamespace {
  add     : typeof import("./add").default,
  inc     : typeof import("./inc").default
  sub     : typeof import("./sub").default,
  dec     : typeof import("./dec").default,
  mul     : typeof import("./mul").default,
  double  : typeof import("./double").default,
  div     : typeof import("./div").default,
  half    : typeof import("./half").default
  pos     : typeof import("./pos").default,
  pow     : typeof import("./pow").default,

  zero    : typeof import("./zero").default,
  one     : typeof import("./one").default,
  NAN     : typeof import("./NAN").default,
  is      : typeof import("./is").default,
  isZero  : typeof import("./isZero").default,
  isPos   : typeof import("./isPos").default,
  ne      : typeof import("./ne").default,
  neZero  : typeof import("./neZero").default,
  nePos   : typeof import("./nePos").default,
  neNeg   : typeof import("./neNeg").default,
  not     : typeof import("./not").default,
  eq      : typeof import("./eq").default,
  gt      : typeof import("./gt").default,
  lt      : typeof import("./lt").default,
  ge      : typeof import("./ge").default,
  le      : typeof import("./le").default,
  between : typeof import("./between").default,
  odd     : typeof import("./odd").default,
  even    : typeof import("./even").default,

  clamp   : typeof import("./clamp").default,
  min     : typeof import("./min").default,
  max     : typeof import("./max").default,
}

declare const NumberNamespace: Promises<_NumberNamespace>;
export default NumberNamespace;
