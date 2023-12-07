export default (next)=>(keys)=>(
  (keys=new Function("value"+","+"next","return"+"({"+keys.reduce((is,key)=>is+'"'+key+'"'+":"+"value"+'['+'"'+key+'"'+']'+"||"+"next"+",","")+"});")),
  ((value) => keys(value,next))
);
