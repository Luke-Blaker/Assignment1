//Variables creating the array and determining its maximum size
let circlelineArray = [];
let arraySize = 1000;

//Function that initialises the base parts of the program, creating the window and counting through the array
function setup() {
  createCanvas(594, 841);
  //Increments by 1 until it reaches the value of arraySize
  for (let i=0; i<arraySize; i++){
    circlelineArray[i] = new CircleLines(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  }
  console.log(circlelineArray);
}

//Function that calls the movement subroutine and displayCircleLines subroutine for every object within the length of the circlelineArray
function draw() {
  for (let i=0; i<circlelineArray.length; i++){
    circlelineArray[i].movementFunction();
    circlelineArray[i].displayCircleLines();
  }
}

//Defining the CircleLines class with subroutines concerning movement and object creation
class CircleLines{
  variablesList(x, y, speedX, speedY, size, rd, grn, bl, a){
    //Creation of the variables used within the CircleLines class
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.rd = random(255);
    this.bl = random(255);
    this.grn = random(255);
    this.a = random(255);
  }



  //Function within the CircleLines class to create motion and collisions
  movementFunction(){
    //Creates the motion of the objects by determining their speed and position
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

//Reverses the path of the ellipse and lines if their x and y positions exceed the boundaries of the window
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //Function within the CircleLines class to display the shapes within the window
  displayCircleLines(){
    //When the spacebar is pressed, the colours within the window will be randomised. If the key is held down, the randomisation will create a psychadelic flickering pattern
    if(keyIsDown(32)){
      (this.rd = random(255));
      (this.grn = random(255));
      (this.bl = random(255));
    }

    //These lines directly create the lines and ellipse
    //colours determined by the variables function above
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x,this.y, 10, 10);
    stroke(this.fillcol);
    line(this.x, this.y, 297, 420);

  }
}
