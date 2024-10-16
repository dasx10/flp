type Predicate<Is, X = any> = {
  <Y extends X>(value: Y | Is): value is Is
  (value: X | Is): value is Is
}

export default Predicate;
