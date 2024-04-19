import type Lambda from "../Types/Lambda";
export default function once<Call extends Lambda<any, any>>(call: Call): Call;
