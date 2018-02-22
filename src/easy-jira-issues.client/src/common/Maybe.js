export default class Maybe {
  static json(val) {
    return val ? val.json() : undefined;
  }
}
