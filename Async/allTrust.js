import future from "../Monad/future.js";export default(x)=>future((y,e)=>{var o=x.length||y(true),i=0,n=0,z;while(i<o&&y)((x[i].then((x)=>(y&&(x?((++n===o)&&(z?(e(z)):y(true))):(y(false),y=e=null))),(x)=>(y&&((++n===o)?(e(x),y=e=null):(z=x))))),i++);});
