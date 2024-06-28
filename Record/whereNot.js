export default(y)=>(x)=>{var k;for(k in y)if(y[k](x[k]))return false;return true;};
