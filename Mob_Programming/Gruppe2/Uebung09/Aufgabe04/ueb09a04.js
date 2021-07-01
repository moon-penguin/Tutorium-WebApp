class Figur {
  constructor(color) {
    this.color = color;
  }

  draw(context) {
    context.fillStyle = this.color;
  }
}

class Rechteck extends Figur {
  constructor(left, top, width, height, color) {
    super(color);
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    console.log(
      `Created a ${this.width}px x ${this.height}px rectangle ${this.left}px from the left and ${this.top}px from the top.`
    );
  }

  draw(context) {
    super.draw(context);
    context.fillRect(this.left, this.top, this.width, this.height);
  }
}

class Kreis extends Figur {
  constructor(x, y, radius, color) {
    super(color);
    this.x = x;
    this.y = y;
    this.radius = radius;
    console.log(
      `Created a circle with ${this.radius}px radius and center ${this.x}px from the left and ${this.y}px from the top.`
    );
  }

  draw(context) {
    super.draw(context);
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
}

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const rectangle = new Rechteck(50, 5, 200, 100, "red");
rectangle.draw(context);
const circle = new Kreis(100, 100, 20, "blue");
circle.draw(context);
