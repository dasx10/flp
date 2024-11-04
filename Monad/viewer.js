import { left, right } from "./either.js";
import promise         from "./promise.js";
import redux           from "./.redux.js";

var viewer = (exec) => {
  var process;
  return redux((resolve,reject)=>((process||(process=(promise(exec)((x)=>(process=null,right(x)),(x)=>(process=null,left(x))))))(resolve,reject)));
};

export default viewer;
