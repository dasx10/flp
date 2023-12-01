export type Promises<Value extends Record<PropertyKey, any>> = {
  [Key in keyof Value]: Value[Key] extends Promise<any> ? Value[Key] : Promise<Value[Key]>
}

interface Def {
  Number: typeof import("./Number").default,
  Array : typeof import("./Array").default
}

declare const namespace: Def;
export default namespace;
