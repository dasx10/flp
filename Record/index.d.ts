interface RecordNamespace {
  assoc    : typeof import("./assoc").default;
  disoc    : typeof import("./disoc").default;
  props    : typeof import("./props").default;
  items    : typeof import("./items").default;
  prop     : typeof import("./prop").default;
  eq       : typeof import("./eq").default;
  dir      : typeof import("./dir").default;
  path     : typeof import("./path").default;
  renew    : typeof import("./renew").default;
  where    : typeof import("./where").default;
  whereOr  : typeof import("./whereOr").default;
  whereNot : typeof import("./whereNot").default;
  has      : typeof import("./has").default;
}

export default RecordNamespace;
