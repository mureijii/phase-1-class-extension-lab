// Your code here
// Define the Polygon class
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter to calculate the perimeter
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  // Define the Triangle class that inherits from Polygon
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides); // Call the parent class constructor
    }
  
    // Getter to check if the triangle is valid
    get isValid() {
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  
  // Define the Square class that inherits from Polygon
  class Square extends Polygon {
    constructor(sides) {
      super(sides); // Call the parent class constructor
    }
  
    // Getter to check if the square is valid
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
  
    // Getter to calculate the area of the square
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2; // area = side * side
      }
      return null; // Return null if it's not a valid square
    }
  }
  
  // Example of a Polygon
  const polygon = new Polygon([5, 10, 15, 20]);
  console.log('Polygon:');
  console.log('Count of Sides:', polygon.countSides); // 4
  console.log('Perimeter:', polygon.perimeter); // 50
  
  // Example of a Triangle
  const triangle = new Triangle([3, 4, 5]);
  console.log('\nTriangle:');
  console.log('Count of Sides:', triangle.countSides); // 3
  console.log('Perimeter:', triangle.perimeter); // 12
  console.log('Is Valid:', triangle.isValid); // true
  
  // Example of a Square
  const square = new Square([4, 4, 4, 4]);
  console.log('\nSquare:');
  console.log('Count of Sides:', square.countSides); // 4
  console.log('Perimeter:', square.perimeter); // 16
  console.log('Is Valid:', square.isValid); // true
  console.log('Area:', square.area); // 16
  