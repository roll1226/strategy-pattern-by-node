import { IndexStrategy } from "./IndexStrategy";
import { TicketStrategyInterface } from "./TicketStrategyInterface";

export class AdultTicketStrategy
  extends IndexStrategy
  implements TicketStrategyInterface
{
  getPrice = () => 3000;
  getUserCount = () => 1;
  needChildChair = () => false;
}
