type Lambda<Y = unknown, X = any> = {
  <Y1 extends Y, X1 extends X>(x: X1): Y1;
  <X1 extends X>(x: X1): Y;
  (value: X): Y;
}

export default Lambda;
