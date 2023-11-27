declare const _and: {
  (value : true,    next : true)    : true;
  (value : true,    next : false)   : false;
  (value : false,   next : true)    : false;
  (value : boolean, next : true)    : value is true;
  (value : true,    next : boolean) : next  is true;
}

export default _and;
