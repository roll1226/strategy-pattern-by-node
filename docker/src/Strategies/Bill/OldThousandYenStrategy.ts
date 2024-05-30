import { BillStrategyInterface } from "./BillStrategyInterface";

export class OldThousandYenStrategy implements BillStrategyInterface {
  getName = () => "野口英世";
  getBehind = () => "富士山と桜";
  getPrice = () => 1000;
  isNew = () => false;
}
