import type E1X2 from "../Number/E1X2";
import type E1X3 from "../Number/E1X3";


/**
  * @summary days per month
  * @description 1 | ... | 31
  */
type DaysPerMonth = E1X3 | 31;

export type DaysPerJanuary            = DaysPerMonth;
export type DaysPerFebruary           = E1X2            | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28;
export type DaysPerFebruaryInLeapYear = DaysPerFebruary | 29;
export type DaysPerMarch              = DaysPerMonth;
export type DaysPerApril              = E1X3;
export type DaysPerMay                = DaysPerMonth;
export type DaysPerJune               = E1X3;
export type DaysPerJuly               = DaysPerMonth;
export type DaysPerAugust             = DaysPerMonth;
export type DaysPerSeptember          = E1X3;
export type DaysPerOctober            = DaysPerMonth;
export type DaysPerNovember           = E1X3;
export type DaysPerDecember           = DaysPerMonth;

export default DaysPerMonth;
