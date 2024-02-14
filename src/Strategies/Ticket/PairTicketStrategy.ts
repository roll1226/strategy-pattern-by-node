import { TicketStrategy } from "./index";

export class PairTicketStrategy implements TicketStrategy {
  getPrice = () => 5000;
  getUserCount = () => 2;
  isAvailableChildAttraction = () => false;
}
