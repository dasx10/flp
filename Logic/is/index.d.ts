declare var is: <Next>(next: Next) => {
  <Value>(value: Value): boolean
  (value: unknown): value is Next
}

export default is;
