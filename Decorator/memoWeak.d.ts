import type Lambda from "../Types/Lambda";
export default function memoWeak<Call extends Lambda<any, any>>(call: Call): Call;
