type CollectionLike = new () => {
  public get(key: any): any;
  public set(key: any, value: any): any;
  public has(key: any): boolean;
};

export default function memoByCreate<Constructor extends CollectionLike>(constructor: Constructor)
  : <Value>(test: (value: Value) => Parameters<Constructor["get"]>[0])
 => <Call extends (value: Value) => any>(call: Call) => Call;
