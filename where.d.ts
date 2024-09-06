/**
  * @function
  * @name where
  */
export default function where<Test extends ({ readonly [key in string | number]?: ((x: any) => any) }) >(test : Test) : <Value extends {
  readonly [Key in keyof Test]?: Test[Key] extends (value: infer Value) => any ? Value : never;
}>(value : Value & { readonly [key in string | number]: any }) => boolean;

export var then: (resolve: (module: typeof where) => any) => any;
