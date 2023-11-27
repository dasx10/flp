declare var concat: <Next extends readonly any[]>(next: Next) => <Values extends readonly any[]>(values: Values) => [...Values, ...Next];
export default concat;
