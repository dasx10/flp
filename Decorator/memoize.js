export default(y)=>{var o=new Map;return(x)=>o.has(x)?o.get(x):o.set(x,y(x)).get(x);};
