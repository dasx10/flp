interface MathNamespace {
  add     : typeof import("./add").default,
  sub     : typeof import("./sub").default,
  sub_    : typeof import("./sub_").default,
  mul     : typeof import("./mul").default,
  div     : typeof import("./div").default,
  div_    : typeof import("./div_").default,
  pow     : typeof import("./pow").default,
  pow_    : typeof import("./pow_").default,
  min     : typeof import("./min").default,
  max     : typeof import("./max").default,
  clump   : typeof import("./clump").default,
  clump_  : typeof import("./clump_").default,
  clump__ : typeof import("./clump__").default,

  inc     : typeof import("./inc").default,
  dec     : typeof import("./dec").default,
  half    : typeof import("./half").default,
  double  : typeof import("./double").default,

  inv     : typeof import("./inv").default,
  neg     : typeof import("./neg").default,
  dec     : typeof import("./dec").default,
  inc     : typeof import("./inc").default,
  avg     : typeof import("./avg").default,
};

export default MathNamespace;
