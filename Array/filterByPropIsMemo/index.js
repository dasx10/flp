import memoize from "../../Decorators/memoize/index.js";
import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import filterDimension from "../filterDimension/index.js";

// import pipe from "../../Composition/pipe/index.js";
// import get from "../../Map/get/index.js";
// import prop from "../../Object/prop/index.js";
// import groupMapMemo from "../groupMapMemo/index.js";

// export default memoize((key) => pipe([groupMapMemo(prop(key)), get(key)]));
export default memoize((key) => memoize((test) => memoizeWeak(filterDimension((value) => value[key] === test))));
