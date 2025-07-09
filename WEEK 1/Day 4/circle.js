import { Shape } from "./shape.js";

export class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }
  area() {
    return (Math.PI * this.radius ** 2);
  }
  perimeter() {
    return (2 * Math.PI * this.radius);
  }
	toString() {
		return `Shape: ${this.name}\nRadius: ${this.radius}\nArea: ${this.area()}\nPerimeter: ${this.perimeter()}`;
	}
}