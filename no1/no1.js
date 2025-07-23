const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function turnOff() {
  red.classList.remove("on");
  yellow.classList.remove("on");
  green.classList.remove("on");
}

function turnOn() {
  turnOff();
  red.classList.add("on");

  setTimeout(() => {
    turnOff();
    yellow.classList.add("on");

    setTimeout(() => {
      turnOff();
      green.classList.add("on");

      setTimeout(() => {
        turnOn(); 
      }, 3000); 

    }, 2000); 

  }, 3000); 
}

turnOn();
