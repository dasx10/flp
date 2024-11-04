type Return<Call extends (...values: readonly any[]) => any> = Call extends (...values: readonly any[]) => infer Result
  ? Result
  : never
;

export default Return;
