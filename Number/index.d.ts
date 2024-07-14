type NumberNamspace = {
  readonly isInt  : typeof import("./isInt").default;
  readonly isNeg  : typeof import("./isNeg").default;
  readonly isPos  : typeof import("./isPos").default;
  readonly isNum  : typeof import("./isNum").default;
  readonly isUint : typeof import("./isUint").default;
}

export default NumberNamspace;
