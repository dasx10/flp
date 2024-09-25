import type { Right, RightFunction } from "../Monad/right";

declare const logic: {
  readonly gt     : Right<typeof import("./gt").default>;
  readonly F      : Right<typeof import("./F").default>;
  readonly T      : Right<typeof import("./T").default>;
  readonly and    : Right<typeof import("./and").default>;
  readonly asc    : Right<typeof import("./asc").default>;
  readonly away   : Right<typeof import("./away").default>;
  readonly but    : Right<typeof import("./but").default>;
  readonly desc   : Right<typeof import("./desc").default>;
  readonly elif   : Right<typeof import("./elif").default>;
  readonly eq     : Right<typeof import("./eq").default>;
  readonly ge     : Right<typeof import("./ge").default>;
  readonly id     : Right<typeof import("./id").default>;
  readonly is     : Right<typeof import("./is").default>;
  readonly isInt  : Right<typeof import("./isInt").default>;
  readonly isNum  : Right<typeof import("./isNum").default>;
  readonly isUint : Right<typeof import("./isUint").default>;
  readonly it     : Right<typeof import("./it").default>;
  readonly le     : Right<typeof import("./le").default>;
  readonly lt     : Right<typeof import("./lt").default>;
  readonly ne     : Right<typeof import("./ne").default>;
  readonly no     : Right<typeof import("./no").default>;
  readonly not    : Right<typeof import("./not").default>;
  readonly unless : Right<typeof import("./unless").default>;
  readonly when   : Right<typeof import("./when").default>;
};

export default logic;
