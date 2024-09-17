import right from"./Monad/right.js";
import future from "./Monad/future.js";
var values = new Map();
var load=(x)=>values.get(x)||values.set(x,future((y,e)=>import(x).then(y,e))).get(x);
var require=(x)=>load(x.endsWith(".js")?x:`${x}.js`);

var ArrayModules = new Proxy(right(Array.from), {
  get:(_, key)=>load(`./Array/${key}.js`),
});

var _ = new Proxy(right, {
  get(_, key) {
    switch (key) {
      case "import" : return require;
      case "Array"  : return ArrayModules;
      default       : return load(`./${key}.js`);
    }
  }
});

export default _;
