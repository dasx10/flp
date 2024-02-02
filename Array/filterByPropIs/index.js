import filter from "../filter/index.js";
import pipe   from "../../Composition/pipe/index.js";
import is     from "../../Logic/is/index.js";
import prop   from "../../Object/prop/index.js";

export default (key) => (value) => filter(pipe([prop(key), is(value)]));
