interface AsyncNamespace {
  all       : typeof import("./all").default;
  allTrust  : typeof import("./allTrust").default;
  any       : typeof import("./any").default;
  anyTrust  : typeof import("./anyTrust").default;
  collector : typeof import("./collector").default;
  trap      : typeof import("./trap").default;
  trapBy    : typeof import("./trapBy").default;
  race      : typeof import("./race").default;
  where     : typeof import("./where").default;
  whereNot  : typeof import("./whereNot").default;
  whereOr   : typeof import("./whereOr").default;
  map       : typeof import("./map").default;
  some      : typeof import("./some").default;
};

export default AsyncNamespace;
