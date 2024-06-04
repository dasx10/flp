import promise from"./promise.js";var o=(x)=>(x.then=x);export default(x)=>{var i;return o((y,e)=>i?i(y,e):(i=promise(x),i(y,e)));}
