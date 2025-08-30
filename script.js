class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call parent constructor with same value for width & height
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._width;
  }
}

// Do not change the code below
window.Rectangle = Rectangle;
window.Square = Square;
