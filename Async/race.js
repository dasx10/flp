import right from "../Monad/right.js";
import promise from "../Monad/promise.js";
var race=(x)=>promise((resolve, reject)=>{
  var value,y=0;
  for(value of x){
    right(value)((value)=>(y=1,resolve(value)),(reason)=>(y=1,reject(reason)));
    if(y)break;
  }
});
export default race;
