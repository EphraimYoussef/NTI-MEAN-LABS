import { Shape } from "./shape.js";

export class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }
  area() {
    return (this.width * this.height);
  }
  perimeter() {
    return ( 2 * (this.width + this.height) );
  }
	toString() {
		return `Shape: ${this.name}\nWidth: ${this.width}\nHeight: ${this.height}\nArea: ${this.area()}\nPerimeter: ${this.perimeter()}`;
	}
}