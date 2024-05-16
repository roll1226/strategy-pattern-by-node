import { TicketStrategyInterface } from "./TicketStrategyInterface";

export class ChildTicketStrategy implements TicketStrategyInterface {
  getPrice = () => 1000;
  getUserCount = () => 1;
  isAvailableChildAttraction = () => true;
}
