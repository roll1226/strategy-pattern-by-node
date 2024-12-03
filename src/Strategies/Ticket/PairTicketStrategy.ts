import { IndexStrategy } from "./IndexStrategy";
import { TicketStrategyInterface } from "./TicketStrategyInterface";

export class PairTicketStrategy
  extends IndexStrategy
  implements TicketStrategyInterface
{
  getPrice = () => 5000;
  getUserCount = () => 2;
  needChildChair = () => false;
}
