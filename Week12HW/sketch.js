var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
var shapeN = 50;
var shapeM = 100;
var shapeNSpeed;
var shapeMSpeed;

var mousex;
var mousey;
function setup() 
{
  createCanvas(500, 500);
  
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  createCharacter(100,250);
}

function draw() {
  background(255,1120,200);
  stroke(0);
  fill(0);
  
  createBorders(5);
  
  // exit text
  textSize(25);
  text("EXIT", width-70,height-100)
  
  //createCharacter (200,350);
  drawCharacter();
  characterMovement();
  
  //potential enemies
  fill(50,200,100);
  square(shapeX, shapeY, 20);
  
  fill(60,100,170);
  circle(shapeN, shapeM, 50);
  
  shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeNspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) +1);
  shapeMspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) +1);
  
  shapeX += shapeXspeed;
  shapeY += shapeYspeed;
  shapeN += shapeNspeed;
  shapeM += shapeMspeed;
  
  // shape X and Y
  if(shapeX > width)
    {
      shapeX = 0;
    }
  if(shapeX < 0)
    {
      shapeX = width;
    }
  if(shapeY > height)
    {
      shapeY = 0;
    }
  if(shapeY < 0)
    {
      shapeY = height;
    }
  
  //shape N and M
  if(shapeN > width)
    {
      shapeN = 0;
    }
  if(shapeN < 0)
    {
      shapeN = width;
    }
  if(shapeM > height)
    {
      shapeM = 0;
    }
  if(shapeM < 0)
    {
      shapeM = height;
    }
  
  if(characterX > width && characterY > width-100)
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("You Won!", width/2-50, height/2-50);
    }
  
  fill(100,200,250);
  square(mousex, mousey, 50);
}
//Character Movement

function characterMovement()
{
  if(keyIsDown(w))
    {
      characterY -= 10;
    }
  if(keyIsDown(s))
    {
      characterY += 10;
    }
  if(keyIsDown(a))
    {
      characterX -= 10;
      console.log("movement: " + characterX);
    }
  if(keyIsDown(d))
    {
      characterX += 10;
    }
}
// Create Character

function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
  console.log(characterX);
}

// Draw Character

function drawCharacter()
{
  fill(255,255,0);
  circle(characterX,characterY,50);
}

function createBorders(thickness)
{
  //top border
  rect(0,0,width,thickness);
  // left border
  rect(0,0,thickness,height);
  // bottom border
  rect(0,height-thickness,width,thickness);
  // right upper border
  rect(width-thickness,-100,thickness,height);
}

// Mouse click
function mouseClicked()
{
  mousex = mouseX;
  mousey = mouseY;
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
}