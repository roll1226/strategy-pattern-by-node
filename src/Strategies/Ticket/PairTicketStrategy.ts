import { TicketStrategyInterface } from "./TicketStrategyInterface";

export class PairTicketStrategy implements TicketStrategyInterface {
  getPrice = () => 5000;
  getUserCount = () => 2;
  needChildChair = () => false;
}
