export default function concat<Right extends readonly any[]>(values: Values): <Left extends readonly any[]>(values: Left) => [...Left, ...Right];
