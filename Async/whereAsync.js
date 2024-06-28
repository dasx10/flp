import p from"../Monad/promise.js";
export default(y)=>(x)=>p((o,e)=>{
  var k,z,n=0,i=0;
  for(k in y){
    (y[k])(x[k])((x)=>n||(x?(--i===0&&((n=1,z?e(z):o(true)))):(n=1,o(false))),(x)=>n||(--i===0?(e(x),n=1):z=x));
    if(n)return;i++;
  }
  console.log({i})
  n||i===0&&o(true);
});
