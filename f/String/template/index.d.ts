type Exec   = Parameters<String["replace"]>[1] | string | ((substring: string, ...args: any[]) => string);
type Search = RegExp | string;

export default function template(exec: Exec): (search: Search) => (value: string) => string;
