import { TicketStrategy } from "./TicketStrategy";

export class PairTicketStrategy implements TicketStrategy {
  getPrice = () => 5000;
  getUserCount = () => 2;
  isAvailableChildAttraction = () => false;
}
