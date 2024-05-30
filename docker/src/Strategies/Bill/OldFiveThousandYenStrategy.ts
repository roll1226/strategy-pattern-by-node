import { BillStrategyInterface } from "./BillStrategyInterface";

export class OldFiveThousandYenStrategy implements BillStrategyInterface {
  getName = () => "樋口一葉";
  getBehind = () => "燕子花図";
  getPrice = () => 5000;
  isNew = () => false;
}
