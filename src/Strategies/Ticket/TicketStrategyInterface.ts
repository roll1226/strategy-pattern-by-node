export interface TicketStrategyInterface {
  getPrice(): number;
  getUserCount(): number;
  isAvailableChildAttraction(): boolean;
}
