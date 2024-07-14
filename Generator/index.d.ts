type GeneratorNamespace = {
  readonly range   : typeof import("./range").default;
  readonly steps   : typeof import("./steps").default;
  readonly keys    : typeof import("./keys").default;
  readonly values  : typeof import("./values").default;
  readonly entries : typeof import("./entries").default;
};

export default GeneratorNamespace;
