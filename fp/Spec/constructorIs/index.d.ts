declare var constructorIs
   : <Instance extends Record<"constructor", any>>(instance: Instance)
  => <Value extends Record<"constructor", any>>(value: Value) => boolean;

export default constructorIs;
