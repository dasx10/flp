export interface ArrayNamespace {
  public readonly reduce                 : Promise<typeof import("./reduce").default>,
  public readonly reduceRight            : Promise<typeof import("./reduceRight").default>,
  public readonly reduceWhile            : Promise<typeof import("./reduceWhile").default>,
  public readonly reduceWhileRight       : Promise<typeof import("./reduceWhileRight").default>,
  public readonly reduceWhileCreated     : Promise<typeof import("./reduceWhileCreated").default>,
  public readonly map                    : Promise<typeof import("./map").default>,
  public readonly mapRight               : Promise<typeof import("./mapRight").default>,
  public readonly filter                 : Promise<typeof import("./filter").default>,
  public readonly filterRight            : Promise<typeof import("./filterRight").default>,
  public readonly filterIndex            : Promise<typeof import("./filterIndex").default>,
  public readonly filterWhere            : Promise<typeof import("./filterWhere").default>,
  public readonly filterWhereEq          : Promise<typeof import("./filterWhereEq").default>,
  public readonly filterWhereIs          : Promise<typeof import("./filterWhereIs").default>,
  public readonly filterWhereNot         : Promise<typeof import("./filterWhereNot").default>,
  public readonly filterIndexMax         : Promise<typeof import("./filterIndexMax").default>,
  public readonly filterIndexMin         : Promise<typeof import("./filterIndexMin").default>,
  // public readonly filterIndexRight    : Promise<typeof import("./filterIndexRight").default>,
  // public readonly filterIndexMaxRight : Promise<typeof import("./filterIndexMaxRight").default>,
  // public readonly filterIndexMinRight : Promise<typeof import("./filterIndexMinRight").default>,
  // public readonly filterEq            : Promise<typeof import("./filterEq").default>,
  // public readonly filterNe            : Promise<typeof import("./filterNe").default>,
  // public readonly filterIs            : Promise<typeof import("./filterIs").default>,
  public readonly reject                 : Promise<typeof import("./reject").default>,
  public readonly rejectRight            : Promise<typeof import("./rejectRight").default>,
  public readonly rejectIndex            : Promise<typeof import("./rejectIndex").default>,
  public readonly rejectWhere            : Promise<typeof import("./rejectWhere").default>,
  public readonly rejectWhereEq          : Promise<typeof import("./rejectWhereEq").default>,
  public readonly rejectWhereIs          : Promise<typeof import("./rejectWhereIs").default>,
  public readonly rejectWhereNot         : Promise<typeof import("./rejectWhereNot").default>,
  // public readonly rejectIndexMax      : Promise<typeof import("./rejectIndexMax").default>,
  // public readonly rejectIndexMin      : Promise<typeof import("./rejectIndexMin").default>,
  // public readonly rejectIndexRight    : Promise<typeof import("./rejectIndexRight").default>,
  // public readonly rejectIndexMaxRight : Promise<typeof import("./rejectIndexMaxRight").default>,
  // public readonly rejectIndexMinRight : Promise<typeof import("./rejectIndexMinRight").default>,
  public readonly uniq                   : Promise<typeof import("./uniq").default>,
  public readonly uniqBy                 : Promise<typeof import("./uniqBy").default>,
  public readonly uniqByRight            : Promise<typeof import("./uniqByRight").default>,
  public readonly slice                  : Promise<typeof import("./slice").default>,
  public readonly sliceRight             : Promise<typeof import("./sliceRight").default>,
  public readonly tail                   : Promise<typeof import("./tail").default>,
  public readonly head                   : Promise<typeof import("./head").default>,
  public readonly drop                   : Promise<typeof import("./drop").default>,
  public readonly limit                  : Promise<typeof import("./limit").default>,
  public readonly after                  : Promise<typeof import("./after").default>,
  public readonly remove                 : Promise<typeof import("./remove").default>,
  public readonly removeRight            : Promise<typeof import("./removeRight").default>,
  public readonly at                     : Promise<typeof import("./at").default>,
  public readonly nth                    : Promise<typeof import("./nth").default>,
  public readonly nthRight               : Promise<typeof import("./nthRight").default>,
  public readonly last                   : Promise<typeof import("./last").default>,
  public readonly first                  : Promise<typeof import("./first").default>,
  public readonly second                 : Promise<typeof import("./second").default>,
  public readonly find                   : Promise<typeof import("./find").default>,
  public readonly findWhere              : Promise<typeof import("./findWhere").default>,
  public readonly findWhereEq            : Promise<typeof import("./findWhereEq").default>,
  public readonly findWhereIs            : Promise<typeof import("./findWhereIs").default>,
  public readonly findWhereNot           : Promise<typeof import("./findWhereNot").default>,
  public readonly findWhereNotEq         : Promise<typeof import("./findWhereNotEq").default>,
  public readonly findWhereNotIs         : Promise<typeof import("./findWhereNotIs").default>,
  public readonly findMax                : Promise<typeof import("./findMax").default>,
  public readonly findMin                : Promise<typeof import("./findMin").default>,
  public readonly findIndexAdapterFind   : Promise<typeof import("./findIndexAdapterFind").default>,
  public readonly findIndexAdapterSome   : Promise<typeof import("./findIndexAdapterSome").default>,
  public readonly findIndex              : Promise<typeof import("./findIndex").default>,
  public readonly findIndexWhere         : Promise<typeof import("./findIndexWhere").default>,
  public readonly findIndexWhereEq       : Promise<typeof import("./findIndexWhereEq").default>,
  public readonly findIndexWhereIs       : Promise<typeof import("./findIndexWhereIs").default>,
  public readonly findIndexWhereNot      : Promise<typeof import("./findIndexWhereNot").default>,
  public readonly findIndexMax           : Promise<typeof import("./findIndexMax").default>,
  public readonly findIndexMin           : Promise<typeof import("./findIndexMin").default>,
  public readonly findLast               : Promise<typeof import("./findLast").default>,
  public readonly findLastWhere          : Promise<typeof import("./findLastWhere").default>,
  public readonly findLastWhereEq        : Promise<typeof import("./findLastWhereEq").default>,
  public readonly findLastWhereIs        : Promise<typeof import("./findLastWhereIs").default>,
  public readonly findLastWhereNot       : Promise<typeof import("./findLastWhereNot").default>,
  public readonly findLastWhereNotEq     : Promise<typeof import("./findLastWhereNotEq").default>,
  public readonly findLastWhereNotIs     : Promise<typeof import("./findLastWhereNotIs").default>,
  // public readonly findLastMax            : Promise<typeof import("./findLastMax").default>,
  // public readonly findLastMin            : Promise<typeof import("./findLastMin").default>,
  public readonly findLastIndex          : Promise<typeof import("./findLastIndex").default>,
  public readonly findLastIndexWhere     : Promise<typeof import("./findLastIndexWhere").default>,
  public readonly findLastIndexWhereEq   : Promise<typeof import("./findLastIndexWhereEq").default>,
  public readonly findLastIndexWhereIs   : Promise<typeof import("./findLastIndexWhereIs").default>,
  public readonly findLastIndexWhereNot  : Promise<typeof import("./findLastIndexWhereNot").default>,
  public readonly findLastIndexWhereNotEq: Promise<typeof import("./findLastIndexWhereNotEq").default>,
  public readonly findLastIndexWhereNotIs: Promise<typeof import("./findLastIndexWhereNotIs").default>,
  public readonly findLastIndexMax       : Promise<typeof import("./findLastIndexMax").default>,
  public readonly findLastIndexMin       : Promise<typeof import("./findLastIndexMin").default>,
  public readonly some                   : Promise<typeof import("./some").default>,
  public readonly someRight              : Promise<typeof import("./someRight").default>,
  public readonly every                  : Promise<typeof import("./every").default>,
  public readonly everyRight             : Promise<typeof import("./everyRight").default>,
  public readonly none                   : Promise<typeof import("./none").default>,
  public readonly noneRight              : Promise<typeof import("./noneRight").default>,
  public readonly all                    : Promise<typeof import("./all").default>,
  // public readonly allRight            : Promise<typeof import("./allRight").default>,
  public readonly any                    : Promise<typeof import("./any").default>,
  // public readonly anyRight            : Promise<typeof import("./anyRight").default>,
  public readonly indexed                : Promise<typeof import("./indexed").default>,
  public readonly includes               : Promise<typeof import("./includes").default>,
  public readonly includesRight          : Promise<typeof import("./includesRight").default>,
  //public readonly excludes             : Promise<typeof import("./excludes").default>,
  //public readonly excludesLast         : Promise<typeof import("./excludesLast").default>,
  public readonly indexOf                : Promise<typeof import("./indexOf").default>,
  public readonly indexMax               : Promise<typeof import("./indexMax").default>,
  public readonly indexMin               : Promise<typeof import("./indexMin").default>,
  // public readonly indexesOf           : Promise<typeof import("./indexesOf").default>,
  // public readonly indexesMax          : Promise<typeof import("./indexesMax").default>,
  // public readonly indexesMin          : Promise<typeof import("./indexesMin").default>,
  public readonly lastIndexOf            : Promise<typeof import("./lastIndexOf").default>,
  public readonly lastIndexMax           : Promise<typeof import("./lastIndexMax").default>,
  public readonly lastIndexMin           : Promise<typeof import("./lastIndexMin").default>,
  public readonly count                  : Promise<typeof import("./count").default>,
  public readonly countOf                : Promise<typeof import("./countOf").default>,
  // public readonly countWhere          : Promise<typeof import("./countWhere").default>,
  // public readonly countWhereEq        : Promise<typeof import("./countWhereEq").default>,
  // public readonly countWhereIs        : Promise<typeof import("./countWhereNotEq").default>,
  // public readonly countWhereNe        : Promise<typeof import("./countWhereNotEq").default>,
  // public readonly countRight          : Promise<typeof import("./countRight").default>,
  public readonly forEach                : Promise<typeof import("./forEach").default>,
  public readonly forEachRight           : Promise<typeof import("./forEachRight").default>,
  public readonly forEachWhile           : Promise<typeof import("./forEachWhile").default>,
  public readonly concat                 : Promise<typeof import("./concat").default>,
  public readonly concatRight            : Promise<typeof import("./concatRight").default>,
  public readonly append                 : Promise<typeof import("./append").default>,
  public readonly prepend                : Promise<typeof import("./prepend").default>,
  public readonly include                : Promise<typeof import("./include").default>,
  public readonly insert                 : Promise<typeof import("./insert").default>,
  public readonly empty                  : Promise<typeof import("./empty").default>,
  public readonly length                 : Promise<typeof import("./length").default>,
  public readonly eq                     : Promise<typeof import("./eq").default>,
  public readonly is                     : Promise<typeof import("./is").default>,
  public readonly ne                     : Promise<typeof import("./ne").default>,
  public readonly reverse                : Promise<typeof import("./reverse").default>,
  public readonly sumOf                  : Promise<typeof import("./sumOf").default>,
  public readonly sum                    : Promise<typeof import("./sum").default>,
  public readonly sumSMI                 : Promise<typeof import("./sumSMI").default>,
  public readonly minOf                  : Promise<typeof import("./minOf").default>,
  public readonly min                    : Promise<typeof import("./min").default>,
  public readonly minBy                  : Promise<typeof import("./minBy").default>,
  public readonly maxOf                  : Promise<typeof import("./maxOf").default>,
  public readonly max                    : Promise<typeof import("./max").default>,
  public readonly maxBy                  : Promise<typeof import("./maxBy").default>,
  public readonly sort                   : Promise<typeof import("./sort").default>,
}

declare const ArrayNamespace: ArrayNamespace;
export default ArrayNamespace;
