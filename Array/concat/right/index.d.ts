declare var concatRight: <Next extends readonly any[]>(next: Next) => <Values extends readonly any[]>(values: Values) => [...Next, ...Values];
export default concatRight;
