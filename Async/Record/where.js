import p from"../Monad/promise.js";export default(y)=>(x)=>p((o,e)=>{var k,z,n=0,i=0;for(k in y){(y[k])(x[k])((x)=>n||(x?(--i===0&&((n=1,z?e(z):o(true)))):(n=1,o(false))),(x)=>n||(--i===0?(n=1,e(x)):(z=x)));if(n)return;i++;}k||(n||(i===0&&(z?e(z):o(true))));});