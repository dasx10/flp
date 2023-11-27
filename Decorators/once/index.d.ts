import type Lambda from "../../types/Lambda";
export default function once<Call extends Lambda<any, any>>(call: Call): Call;
