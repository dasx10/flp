import string from "./String/index.js";
import logic  from "./Logic/index.js";
import math   from "./Math/index.js";

import right from"./Monad/right.js";
import future from "./Monad/future.js";
var values = new Map();
var load=(x)=>values.get(x)||values.set(x,future((y,e)=>import(x).then(y,e))).get(x);
var require=(x)=>load(x.endsWith(".js")?x:`${x}.js`);

var _ = new Proxy(right, {
  get(_, key) {
    switch (key) {
      case "import" : return require;
      case "string" : return string;
      case "logic"  : return logic;
      case "math"   : return math;
      default       : return load(`./${key}.js`);
    }
  }
});

export default _;
