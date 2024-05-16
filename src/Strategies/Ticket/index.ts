export interface TicketStrategy {
  getPrice(): number;
  getUserCount(): number;
  isAvailableChildAttraction(): boolean;
}

/**
 * @export getPrice
 * @class Ticket
 */
export class Ticket {
  /**
   * @private
   * @type {TicketStrategy}
   * @memberof Ticket
   */
  private _strategy: TicketStrategy;
  /**
   * Creates an instance of Ticket.
   * @param {TicketStrategy} strategy
   * @memberof Ticket
   */
  constructor(strategy: TicketStrategy) {
    this._strategy = strategy;
  }

  /**
   * @returns number
   * @memberof Ticket
   */
  getPrice = (): number => this._strategy.getPrice();
  /**
   * @returns number
   * @memberof Ticket
   */
  getUserCount = (): number => this._strategy.getUserCount();
  /**
   * @returns boolean
   * @memberof Ticket
   */
  isAvailableChildAttraction = (): boolean =>
    this._strategy.isAvailableChildAttraction();
}
