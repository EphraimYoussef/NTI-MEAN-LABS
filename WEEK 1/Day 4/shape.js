export class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    throw new Error('Method "area()" must be implemented');
  }
  perimeter() {
    throw new Error('Method "perimeter()" must be implemented');
  }
  toString() {
    throw new Error('Method "toString()" must be implemented');
  }
}
