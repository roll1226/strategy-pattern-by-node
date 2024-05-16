import { TicketStrategyInterface } from "./TicketStrategyInterface";

export class AdultTicketStrategy implements TicketStrategyInterface {
  getPrice = () => 3000;
  getUserCount = () => 1;
  isAvailableChildAttraction = () => false;
}
