import { TicketStrategy } from "./TicketStrategy";

export class AdultTicketStrategy implements TicketStrategy {
  getPrice = () => 3000;
  getUserCount = () => 1;
  isAvailableChildAttraction = () => false;
}
