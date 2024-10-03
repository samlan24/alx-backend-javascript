export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    this._sqft = sqft;

    if (this.evacuationWarningMessage === undefined) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }
}
