const body = document.querySelector("body");

const createButtons = function () {
  for (let i = 0; i < 20; i++) {
    const btn = document.createElement("button");
    btn.innerText = `Button ${i}`;
    body.append(btn);
  }
};

const addHandlers = function (nodes) {
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].onclick = (function (c) {
      return function (e) {
        alert(c);
      };
    })(i);
  }
};

/* alternative with let */
/*
const addHandlers = function (nodes) {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].onclick = function (e) {
      alert(i);
    };
  }
};
*/

createButtons();
const buttons = document.querySelectorAll("button");
addHandlers(buttons);
