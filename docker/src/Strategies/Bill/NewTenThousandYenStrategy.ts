import { BillStrategyInterface } from "./BillStrategyInterface";

export class NewTenThousandYenStrategy implements BillStrategyInterface {
  getName = () => "渋沢栄一";
  getBehind = () => "東京駅";
  getPrice = () => 10000;
  isNew = () => true;
}
