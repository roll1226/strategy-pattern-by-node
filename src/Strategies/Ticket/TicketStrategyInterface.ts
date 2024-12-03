export interface TicketStrategyInterface {
  getPrice(): number;
  getUserCount(): number;
  needChildChair(): boolean;
  getName(): string;
}
