import type Lambda from "../../types/Lambda";

declare var is
   : <Next  extends Lambda<any, any>>(next: Next)
  => <Value extends Lambda<any, any>>(value: Value) => boolean;

export default is;
