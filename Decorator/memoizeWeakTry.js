export default(y)=>{var o=new WeakMap;return(x)=>x&&Object(x)===x?(o.has(x)?o.get(x):o.set(x,y(x)).get(x)):y(x)};
