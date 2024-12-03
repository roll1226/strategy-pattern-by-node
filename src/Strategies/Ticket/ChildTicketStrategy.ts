import { IndexStrategy } from "./IndexStrategy";
import { TicketStrategyInterface } from "./TicketStrategyInterface";

export class ChildTicketStrategy
  extends IndexStrategy
  implements TicketStrategyInterface
{
  getPrice = () => 1000;
  getUserCount = () => 1;
  needChildChair = () => true;
}
