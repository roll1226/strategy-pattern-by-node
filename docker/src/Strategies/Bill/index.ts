import { BillStrategyInterface } from "./BillStrategyInterface";

export * from "./NewFiveThousandYenStrategy";
export * from "./NewTenThousandYenStrategy";
export * from "./NewThousandYenStrategy";
export * from "./OldFiveThousandYenStrategy";
export * from "./OldTenThousandYenStrategy";
export * from "./OldThousandYenStrategy";

/**
 * @export
 * @class bill
 */
export class Bill implements BillStrategyInterface {
  /**
   * @private
   * @type {BillStrategyInterface}
   * @memberof bill
   */
  private _strategy: BillStrategyInterface;

  /**
   * Creates an instance of bill.
   * @param {BillStrategyInterface} strategy
   * @memberof bill
   */
  constructor(strategy: BillStrategyInterface) {
    this._strategy = strategy;
  }

  /**
   * @memberof bill
   * @returns string
   */
  getName = (): string => this._strategy.getName();
  /**
   * @memberof bill
   * @returns string
   */
  getBehind = (): string => this._strategy.getBehind();
  /**
   * @memberof bill
   * @returns number
   */
  getPrice = (): number => this._strategy.getPrice();
  /**
   * @memberof bill
   * @returns boolean
   */
  isNew = (): boolean => this._strategy.isNew();
}
