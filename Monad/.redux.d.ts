export default function redux<Call extends (resolve: (value: any) => any, reject?: (reason: any) => any) => any>(call: Call): Call & {
  then: Call
};
