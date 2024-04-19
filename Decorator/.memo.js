export default(z)=>(y)=>{var o=new z();return(x)=>o.has(x)?o.get(x):o.set(x,y(x)).get(x);};
