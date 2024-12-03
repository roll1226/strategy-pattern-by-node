export class IndexStrategy {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  getName = () => this._name;
}
