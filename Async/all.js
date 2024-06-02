import promise from "../Monad/promise.js";
var all=(y)=>promise((resolve,reject)=> {
  var i=0;
  var length = y.length;
  var create = Array();
  var is = 0;
  while(i<length&&is>-1){
    y[i](
      (x)=>(create.push(x),++is===length&&resolve(create)),
      (x)=>(is>-1&&reject(x),is=-1),
    );
    i++;
  }
});
export default all;
