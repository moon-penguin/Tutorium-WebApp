class Rechteck {
  constructor(left, top, width, height, color) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.color = color;

    this.speedX = getRandomInt(6) + 1;
    this.speedY = getRandomInt(6) + 1;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.left, this.top, this.width, this.height);
  }

  move(canvas) {
    if (this.left + this.width > canvas.width || this.left < 0) {
      this.speedX *= -1;
    }
    this.left += this.speedX;

    if (this.top + this.height > canvas.height || this.top < 0) {
      this.speedY *= -1;
    }
    this.top += this.speedY;

    this.draw(canvas.getContext("2d"));
  }
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const rectangle = new Rechteck(50, 5, 200, 100, "red");
const canvas = document.querySelector("canvas");
const btnDelete = document.getElementById("delete");
const btnRedraw = document.getElementById("redraw");
const btnMove = document.getElementById("move");
const btnStop = document.getElementById("stop");

const rectangles = [];
rectangles.push(rectangle);

rectangle.draw(canvas.getContext("2d"));

canvas.onclick = (e) => {
  console.log(e);
  const rectangle = new Rechteck(
    e.layerX,
    e.layerY,
    getRandomInt(canvas.width - e.layerX),
    getRandomInt(canvas.height - e.layerY),
    `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
  );
  rectangle.draw(canvas.getContext("2d"));
  rectangles.push(rectangle);
};

btnDelete.onclick = () => {
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
};

btnRedraw.onclick = () => {
  const context = canvas.getContext("2d");
  rectangles.forEach((rectangle) => {
    rectangle.draw(context);
  });
};

let interval;

btnMove.onclick = () => {
  clearInterval(interval);
  interval = setInterval(moveRectangles, 50);
};

btnStop.onclick = () => {
  clearInterval(interval);
};

const moveRectangles = () => {
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  rectangles.forEach((rectangle) => {
    rectangle.move(canvas);
  });
};
