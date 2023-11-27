declare var notEmpty: {
  (values: readonly [any, ...any[]]): true;
  (values: readonly []): false;
  (values: readonly any[]): boolean;
}

export default notEmpty;
