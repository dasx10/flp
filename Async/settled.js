import promise from "./promise.js";
var all=(y)=>promise((resolve,reject)=> {
  var i=0,length=y.length,resolved=Array(),rejected=Array(),is=0;
  while(i<length){
    y[i](
      (x)=>((resolved.push(x)),((++is===length)&&((rejected.length)?reject([resolved,rejected]):resolve(resolved)))),
      (x)=>((rejected.push(x)),((++is===length)&&reject([resolved,rejected]))),
    );
    i++;
  }
});
export default all;
