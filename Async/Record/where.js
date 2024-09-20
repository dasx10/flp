import promise from"../../Monad/promise.js";
import right   from"../../Monad/right.js";

var where=((test)=>(record)=>promise((resolve,reject)=>{
  var key,done=0,i=0;
  for(key in test){
    right(test[key])(right(record[key]))(
      (value) =>done||(value?(--i===0&&((done=1,resolve(true)))):(done=1,resolve(false))),
      (reason)=>(done=1,reject(reason))
    );
    if(done)return;
    i++;
  }
  done||(i===0&&(resolve(Boolean(key))));
}));

export default where;
