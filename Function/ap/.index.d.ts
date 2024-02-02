/**
  * @description Calls the function with the given argument
  * @function
  * @name ap
  * @alias argument pin
  */
export default function<Return, Value>(call: (value: Value) => Return, value: Value): Return;
