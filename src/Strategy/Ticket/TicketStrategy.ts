export interface TicketStrategy {
  getPrice(): number;
  getUserCount(): number;
  isAvailableChildAttraction(): boolean;
}
