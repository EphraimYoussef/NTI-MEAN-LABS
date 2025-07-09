import { Shape } from "./shape.js";

export class Square extends Shape {
  constructor(side) {
    super('Square');
    this.side = side;
  }
  area() {
    return (this.side * this.side);
  }
  perimeter() {
    return (4 * this.side);
  }
	toString() {
		return `Shape: ${this.name}\nSide: ${this.side}\nArea: ${this.area()}\nPerimeter: ${this.perimeter()}`;
	}
}