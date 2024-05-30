import { BillStrategyInterface } from "./BillStrategyInterface";

export class OldTenThousandYenStrategy implements BillStrategyInterface {
  getName = () => "福沢諭吉";
  getBehind = () => "平等院鳳凰像";
  getPrice = () => 10000;
  isNew = () => false;
}
