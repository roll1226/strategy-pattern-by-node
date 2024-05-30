import { BillStrategyInterface } from "./BillStrategyInterface";

export class NewThousandYenStrategy implements BillStrategyInterface {
  getName = () => "	北里柴三郎";
  getBehind = () => "富嶽三十六景";
  getPrice = () => 1000;
  isNew = () => true;
}
