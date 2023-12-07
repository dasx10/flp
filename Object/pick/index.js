export default (next)=>(keys)=>(
  (keys=new Function("value"+","+"next","return"+"({"+keys.reduce((is,key)=>is+'"'+key+'"'+":"+"value"+'['+'"'+key+'"'+']'+",","")+"});")),
  ((value) => keys(value,next))
);
