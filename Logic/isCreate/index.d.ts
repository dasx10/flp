export default function isCreate(): <Next>(next: Next) => (value: any) => value is Next;
