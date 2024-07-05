interface Compose {
  bank    : typeof import("./bank").default,
  beAll   : typeof import("./beAll").default;
  beAny   : typeof import("./beAny").default;
  compose : typeof import("./compose").default;
  pipe    : typeof import("./pipe").default;
}

export default Compose;
