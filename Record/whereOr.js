export default(y)=>(x)=>{var i;for(i in y)if(y[i](x[i]))return true;return false}
