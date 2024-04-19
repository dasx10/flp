type Monoid<X, Y extends X = X> = {
  (x: X): Y;
  <Z extends X>(z: Z): Y;
}

export default Monoid;
