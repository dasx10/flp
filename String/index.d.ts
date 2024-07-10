interface StringNamespace {
  lower: typeof import("./lower").default
  upper: typeof import("./upper").default
  camel: typeof import("./camel").default
};

export default StringNamespace;
