declare var eq: <Next extends string>(next: Next) => {
  (value: Next): string extends Next ? boolean : true;
  <Value extends string>(value: Value): string extends Value ? boolean : string extends Next ? boolean : false;
}

export default eq;
