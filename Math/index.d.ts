import type { Right } from "../Monad/right";

declare const math: {
  readonly add   : Right<typeof import("./add").default>;
  readonly sub   : Right<typeof import("./sub").default>;
  readonly div   : Right<typeof import("./div").default>;
  readonly mul   : Right<typeof import("./mul").default>;
  readonly pow   : Right<typeof import("./pow").default>;
  readonly root  : Right<typeof import("./root").default>;
  readonly mod   : Right<typeof import("./mod").default>;
  readonly avg   : Right<typeof import("./avg").default>;

  readonly min   : Right<typeof import("./min").default>;
  readonly max   : Right<typeof import("./max").default>;
  readonly clamp : Right<typeof import("./clamp").default>;

  readonly inc   : Right<typeof import("./inc").default>;
  readonly dec   : Right<typeof import("./dec").default>;
};

export default math;
