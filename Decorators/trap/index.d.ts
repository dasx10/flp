export default function trap <Call extends (value: any) => Promise<any>>(call: Call): Call;
