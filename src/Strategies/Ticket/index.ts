import { TicketStrategyInterface } from "./TicketStrategyInterface";

/**
 * @export getPrice
 * @class Ticket
 */
export class Ticket {
  /**
   * @private
   * @type {TicketStrategyInterface}
   * @memberof Ticket
   */
  private _strategy: TicketStrategyInterface;
  /**
   * Creates an instance of Ticket.
   * @param {TicketStrategyInterface} strategy
   * @memberof Ticket
   */
  constructor(strategy: TicketStrategyInterface) {
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
