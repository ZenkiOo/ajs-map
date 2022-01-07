export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(404, 'Page not found');
  }

  translate(code) {
    let description = '';
    if (this.errors.has(code)) {
      description = this.errors.get(code);
    } else {
      description = 'Unknown error';
    }
    return description;
  }
}
