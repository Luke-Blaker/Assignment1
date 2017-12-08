//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 1000;

function setup() {
  createCanvas(594, 841);
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  }
  console.log(circleArray);
}

function draw() {
  //background(160);
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();



  }
}

//Definition of the class Circle
class Circle{

  colourmap(){
    var mouse1 = map(mouseY, 0, height, 0, 255);
    var mouse2 = map(mouseX, 0, width, 0, 255);
    var mouse3 = map(mouseY, 0, width, 0, 255);
  }


  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    //this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = random(255);
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //Class function that displays the ellipse
  displayCircle(){
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x,this.y, 10, 10);
    stroke(this.fillcol);
    line(this.x, this.y, 297, 420);
  }
}
