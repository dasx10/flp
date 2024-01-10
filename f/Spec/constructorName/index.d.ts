/**
  * @template {Record<PropertyKey, any>} Value
  * @param {Value} value
  * @returns {Value["constructor"]["name"]}
  */
declare var constructorName: <Value>(value: Value) => Value["constructor"]["name"];
export default constructorName;
