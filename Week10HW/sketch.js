var x = 200;
var y = 180;
var lineY = 150;
var headX = 200;
var size = 22;
var count = 0;
var sizeDirection = 1;

var movement;
var movement2;
function setup() {
    createCanvas(400, 400);
  movement = floor(random() * 10) + 1;
  movement2 = floor(random() * 10) +1;
  }
  
  function draw() 
  {
    background(255,128,128);

     fill(0,0,0);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
      sizeDirection *= -1;
      count = 0;
    }
    text("It's Me!", 20,40);
    
    //hair behind head
    fill(90,60,30);
    rect(100,200,200,300);
    
  //neck
    fill(255,204,153);
    rect(165,300,70,200);
    
  // head
    {
    fill(255,204,153);
    ellipse(headX,200,200,250);
    if(headX >= 350 || headX <=50)
      {
        movement *= -1;
      }
    headX += movement;
  }
    
    //eyes
    {
    fill(255,255,255);
  ellipse(250,y,30,15);
    ellipse(150,y,30,15);
    line(230,lineY,260,150);
    line(130,lineY,165,150);
    if(y >=400 || y <=0)
        {
          movement *= -1;
        }
      y += movement;
    }
    {
    if(lineY >=200 || lineY <=100)
      {
        movement2 *= -1;
      }
    lineY += movement2;
    }
    //pupils
    strokeWeight(5);
    fill(0);
    point(250,180);
    point(150,180);
    
    //nose
    fill(255,128,128);
    triangle(180,240,200,200,220,240);
  
    //mouth
    {
    fill(153,51,102);
    ellipse(x,275,30,10);
      if(x >=350 || x <=50)
        {
          movement2 *= -1;
        }
      x += movement2;
    }
    
    //hair
    fill(90,60,30);
    triangle(200,70,350,300,280,80);
    triangle(200,70,50,280,120,80);
    
    //text
    fill(255,255,255);
    textSize(20);
    text("Madison Daggett",240,380);
  }