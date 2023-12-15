export default function less<Call extends (value: any) => Promise<any>>(call: Call): Call;
