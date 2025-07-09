import { Rectangle } from './rectangle.js';
import { Square } from './square.js';
import { Circle } from './circle.js';

const rect = new Rectangle(10, 5);
const square = new Square(6);
const circle = new Circle(4);

console.log( rect.toString()   );
console.log( square.toString() );
console.log( circle.toString() );