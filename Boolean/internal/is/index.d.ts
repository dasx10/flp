declare const _is: {
  (value : true,    next : true)    : true;
  (value : false,   next : false)   : false;
  (value : boolean, next : false)   : value is false;
  (value : boolean, next : true)    : value is true;
  (value : true,    next : boolean) : next  is true;
  (value : false,   next : boolean) : next  is false;
  (value : boolean, next : boolean) : boolean;
}

export default _is;
