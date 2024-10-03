export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if ((typeof code !== 'string') && !(code instanceof String)) {
      throw new TypeError('Code must be a String');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  } 

  set name(name) {
    if ((typeof name !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a String');
    }
    this._name = name;
  }

  static displayFullCurrency(currency) {
    return `${currency._name} (${currency._code})`;
  }
}
