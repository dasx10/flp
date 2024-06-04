import { left, right } from "./either.js";
import promise from "./promise.js";
var then=(x)=>(x.then=x);
var viewer = (exec) => {
  var i;
  return then((resolve, reject) => ((i||(i=(promise(exec)((x)=>(i=null,right(x)),(e)=>(i=null,left(e))))))(resolve, reject)));
};

export default viewer;
