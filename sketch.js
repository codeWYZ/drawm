//Drawing Program
// By Hamzah Khalloof
let buttonBlack;
let buttonRed;
let buttonBlue;
let buttonGreen;
let buttonPurple;
let buttonErase; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(300);
  buttonBlack = createButton('Black')
  buttonBlack.position(20,20)
  buttonBlack.mousePressed(changeBlack)
  buttonRed = createButton('Red')
  buttonRed.position(80,20)
  buttonRed.mousePressed(changeRed)
  buttonBlue = createButton('Blue')
  buttonBlue.position(130,20)
  buttonBlue.mousePressed(changeBlue)
  buttonGreen = createButton('Green')
  buttonGreen.position(185,20)
  buttonGreen.mousePressed(changeGreen)
  buttonPurple = createButton('Purple')
  buttonPurple.position(245,20)
  buttonPurple.mousePressed(changePurple)
  buttonErase = createButton('Erase')
  buttonErase.position(305,20)
  buttonErase.mousePressed(changeErase)
}

function changeErase() {
  fill(300)
}

function changePurple() {
  fill(200,100,300)
}

function changeGreen() {
  fill(100,300,100)
}

function changeBlue() {
  fill(100,200,300)
}

function changeRed() {
  fill(300,100,100)
}

function changeBlack() {
  fill(0);
}

function draw() {
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);
 
}
