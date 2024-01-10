import next from "../pause/index.js";
export default (call, value, length, freeze) => Promise.resolve(call(value)).catch((error) => length
  ? next(() => exec(call, value, length - 1, freeze), freeze)
  : Promise.reject(error))
);
