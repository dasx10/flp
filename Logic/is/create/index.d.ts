declare const create: () => <Next>(next: Next) => (value: unknown) => value is Next;
export default create;
