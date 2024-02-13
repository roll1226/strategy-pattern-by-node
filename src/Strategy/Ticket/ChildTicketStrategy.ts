import { TicketStrategy } from "./TicketStrategy";

export class ChildTicketStrategy implements TicketStrategy {
  getPrice = () => 1000;
  getUserCount = () => 1;
  isAvailableChildAttraction = () => true;
}
