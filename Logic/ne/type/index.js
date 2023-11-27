import pipe   from "../../../Composition/pipe/index.js";
import typeOf from "../../../Spec/typeOf/index.js";
import ne     from "../index.js";

var neType = is => pipe([typeOf, ne(is)]);
export default neType;
