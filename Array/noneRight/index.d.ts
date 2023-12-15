import type Lambda    from "../../../types/Lambda";
import type Parameter from "../../../types/Parameter";
export default function noneRight<Call extends Lambda<any, any>>(call: Call): <Values extends readonly Parameter<Call>>(Values: Values) => boolean
