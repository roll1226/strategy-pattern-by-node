import { BillStrategyInterface } from "./BillStrategyInterface";

export class NewFiveThousandYenStrategy implements BillStrategyInterface {
  getName = () => "津田梅子";
  getBehind = () => "藤";
  getPrice = () => 5000;
  isNew = () => true;
}
