type Compose = {
  readonly bank    : typeof import("./bank").default,
  readonly beAll   : typeof import("./beAll").default;
  readonly beAny   : typeof import("./beAny").default;
  readonly compose : typeof import("./compose").default;
  readonly pipe    : typeof import("./pipe").default;
}

export default Compose;
