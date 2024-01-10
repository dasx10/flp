export default function is<Call extends Function>(call: Call, next: Call): next is Call;
export default function is<Call extends Function>(call: Call, next: Call): call is Call;
