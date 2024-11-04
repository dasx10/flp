type ParamFunction<Exec> = Exec extends (call: infer Param) => infer Return
  ? Param extends (value: any) => any
    ? Exec
    : <Result>(call: (value: unknown) => Result) => Return
  : <Result>(call: (value: unknown) => Result) => unknown
;

export default function paramFunction<Exec>(exec: ParamFunction<Exec>): ParamFunction<Exec>;
