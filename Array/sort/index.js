import _sort  from "../internal/sort/index.js";
import _sort2 from "../internal/sort/2/index.js";
import _sort3 from "../internal/sort/3/index.js";

var sort = ((
  _sort2,
  _sort3,
  _sort
) => call => values => {
  switch (values.length) {
    case 0  :
    case 1  : return values;
    case 2  : return _sort2(values, call);
    case 3  : return _sort3(values, call);
    default : return _sort (values, call);
  }
})(
  _sort2,
  _sort3,
  _sort,
);

export default sort;
