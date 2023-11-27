import union2     from "../../../Function/union/2/index.js";
import dec        from "../../../Number/dec/index.js";
import gt0        from "../../../Number/gt/0/index.js";
import isZero     from "../../../Number/is/zero/index.js";
import neMinusOne from "../../../Number/ne/minusOne/index.js";
import first      from "../../first/index.js";
import _findIndex from "../findIndex/index.js";
import _limit     from "../limit/index.js";
import _slice     from "../slice/index.js";
import toSorted   from "./toSorted/index.js";

var _sort = ((
  gt0,
  isZero,
  neMinusOne,
  dec,
  union2,
  first,
  toSorted,
  sort,
  _findIndex,
  _slice,
  _limit,
  concat,
) => (
  values,
  call,
) => {
  var index = _findIndex(values, (value, index, values) => index && gt0(call(value)(values[dec(index)])));
  if (isZero(index)) return toSorted.call(values, union2(call));
  if (neMinusOne(index)) {
    index--;
    var create = sort.call(_slice(values, index), union2(call));
    var is = first(values);
    if (gt0(call(first(create))(is))) {
      var exec = call(is);
      var next = _findIndex(create, (value) => gt0(exec(value)));
      if (neMinusOne(next)) {
        return concat.call(
          _limit(create, next),
          _limit(values, index),
          _slice(create, next)
        );
      }
      return concat.call(
        create,
        _limit(values, index),
      );
    }
    return concat.call(
      _limit(values, index),
      create
    );
  }

  return values;
})(
  gt0,
  isZero,
  neMinusOne,
  dec,
  union2,
  first,
  toSorted,
  Array.prototype.sort,
  _findIndex,
  _slice,
  _limit,
  Array.prototype.concat,
);

export default _sort;
