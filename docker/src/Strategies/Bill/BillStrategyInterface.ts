export interface BillStrategyInterface {
  getName(): string;
  getBehind(): string;
  getPrice(): number;
  isNew(): boolean;
}
