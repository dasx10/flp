import type { Right } from "../Monad/right";

interface ArrayNamespace {
  readonly append           : import("./append").RightAppend;
  readonly at               : import("./at").RightAt;
  readonly avgs             : Right<typeof import("./avgs").default>;
  readonly avgsBy           : import("./avgsBy").RightAvgsBy;
  readonly concat           : import("./concat").RightConcat;
  readonly contains         : Right<typeof import("./contains").default>;
  readonly count            : Right<typeof import("./count").default>;
  readonly countBy          : Right<typeof import("./countBy").default>;
  readonly empty            : Right<typeof import("./empty").default>;
  readonly filter           : import("./filter").RightFilter;
  readonly find             : Right<typeof import("./find").default>;
  readonly findIndex        : Right<typeof import("./findIndex").default>;
  readonly findIndexMax     : Right<typeof import("./findIndexMax").default>;
  readonly findIndexMin     : Right<typeof import("./findIndexMin").default>;
  readonly findLast         : Right<typeof import("./findLast").default>;
  readonly findLastIndex    : Right<typeof import("./findLastIndex").default>;
  readonly findLastIndexMax : Right<typeof import("./findLastIndexMax").default>;
  readonly findLastIndexMin : Right<typeof import("./findLastIndexMin").default>;
  readonly findLastMax      : Right<typeof import("./findLastMax").default>;
  readonly findLastMin      : Right<typeof import("./findLastMin").default>;
  readonly first            : Right<typeof import("./first").default>;
  readonly forEach          : Right<typeof import("./forEach").default>;
  readonly forEachRight     : Right<typeof import("./forEachRight").default>;
  readonly fromAsync        : Right<typeof import("./fromAsync").default>;
  readonly includes         : Right<typeof import("./includes").default>;
  readonly indexBy          : Right<typeof import("./indexBy").default>;
  readonly indexMax         : Right<typeof import("./indexMax").default>;
  readonly indexMin         : Right<typeof import("./indexMin").default>;
  readonly indexOf          : Right<typeof import("./indexOf").default>;
  readonly last             : Right<typeof import("./last").default>;
  readonly lastIndexOf      : Right<typeof import("./lastIndexOf").default>;
  readonly length           : Right<typeof import("./length").default>;
  readonly map              : import("./map").RightMap;
  readonly notEmpty         : Right<typeof import("./notEmpty").default>;
  readonly nth              : Right<typeof import("./nth").default>;
  readonly nthBy            : Right<typeof import("./nthBy").default>;
  readonly paginate         : Right<typeof import("./paginate").default>;
  readonly prepend          : import("./prepend").RightPrepend;
  readonly reduce           : Right<typeof import("./reduce").default>;
  readonly reduceRight      : Right<typeof import("./reduceRight").default>;
  readonly reject           : Right<typeof import("./reject").default>;
  readonly reverse          : Right<typeof import("./reverse").default>;
  readonly select           : Right<typeof import("./select").default>;
  readonly sort             : Right<typeof import("./sort").default>;
  readonly sum              : Right<typeof import("./sum").default>;
  readonly traverse         : Right<typeof import("./traverse").default>;
}

type primitive = number | string | boolean | null | undefined | symbol | bigint;

declare function arrayConstructor<Values extends readonly primitive[]>(...values: Values): Right<Readonly<Values>>;
declare function arrayConstructor<Values extends readonly any[]>(...values: Values): Right<Readonly<Values>>;

declare const array: typeof arrayConstructor & ArrayNamespace;

export default array;
