export interface TicketStrategy {
  getPrice(): number;
  getUserCount(): number;
  isAvailableChildAttraction(): boolean;
}

export class Ticket {
  private _strategy: TicketStrategy;
  constructor(strategy: TicketStrategy) {
    this._strategy = strategy;
  }

  getPrice = (): number => this._strategy.getPrice();
  getUserCount = (): number => this._strategy.getUserCount();
  isAvailableChildAttraction = (): boolean =>
    this._strategy.isAvailableChildAttraction();
}
