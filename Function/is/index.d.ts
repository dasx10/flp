import type Lambda from "../../types/Lambda";

export default function is<Next extends Lambda<any, any>>(next: Next): {
   (value: Next) : boolean
   <Value extends Lambda<any, any>>(value: Value) : Value extends Next ? boolean : Next extends Value ? boolean : false;
}
