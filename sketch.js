//Create two variables that will store the new objects from the class Circle
let circlelineArray = [];
let arraySize = 1000;


function setup() {
  createCanvas(594, 841);
  for (let i=0; i<arraySize; i++){
    circlelineArray[i] = new CircleLines(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  }
  console.log(circlelineArray);
}

function draw() {
  //background(160);
  for (let i=0; i<circlelineArray.length; i++){
    circlelineArray[i].moveFunction();
    circlelineArray[i].displayCircleLines();



  }
}

//Definition of the class Circle
class CircleLines{

  constructor(x, y, speedX, speedY, size, rd, grn, bl, a){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.rd = random(255);
    this.bl = random(255);
    this.grn = random(255);
    this.a = random(255);
    //this.size = size;
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
  displayCircleLines(){


    if(keyIsDown(32)){
      (this.rd = random(255));
      (this.grn = random(255));
      (this.bl = random(255));
    }


    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x,this.y, 10, 10);
    stroke(this.fillcol);
    line(this.x, this.y, 297, 420);

  }
}
