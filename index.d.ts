import type right from "./Monad/right.js";

declare const _: typeof right & {
  array  : typeof import("./Array/index.js").default;
  math   : typeof import("./Math/index.js").default;
  logic  : typeof import("./Logic/index.js").default;
  string : typeof import("./String/index.js").default;
};

export default _;
