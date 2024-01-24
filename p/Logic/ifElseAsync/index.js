import ap from "../../Function/ap/index.js";

export default (value, resolve, reject, test) => Promise.all([value, test])
  .then(
    ({ 0: value, 1: test }) => test(value) ? Promise.resolve(resolve).then(ap(value)) : Promise.resolve(reject).then(ap(value)),
    () => reject(value)
  )
;
