var where=(y)=>(x)=>{var i;if(x == null)return false;for(i in y)if(y[i](x[i]))continue;else return false;return true};export default where;export var then=(x)=>x(where);
