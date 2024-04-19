import type Lambda from "../Types/Lambda";
export default function memo<Call extends Lambda<any, any>>(call: Call): Call;
