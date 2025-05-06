let player;
let bImg;
let sImg;
let comicFont;
let barriers = [];
let score = 0;
let gameStarted = false;
let gameOver = false;
let gravity = 0.6;
let jumpForce = -18;

//RUN

let runImages = [];
let jumpImage;
let frameCounter = 0;

function preload() {
  //RUN 
  runImages[0] = loadImage("Cat.png");
  runImages[1] = loadImage("CatRun.png");
  jumpImage = loadImage("CatJump.png");
  
  sImg = loadImage('snowman.png');
  bImg = loadImage('background.jpg');
  comicFont = loadFont('comic_zine_ot.otf');
}

function setup() {
  createCanvas(800, 400);
  textFont(comicFont);
  player = new Player();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(bImg);

  if (!gameStarted) {
    fill(255, 255, 255);
    textSize(60);
    text("Press SPACE to Start", width / 2, height / 2);
    return;
  }

  if (gameOver) {
    fill(255, 255, 255);
    textSize(60);
    text("Game Over! Score: " + score, width / 2, height / 2);
    textSize(40);
    text("Press SPACE to Restart", width / 2, height / 2 + 40);
    return;
  }

  player.update();
  player.show();

  if (frameCount % 90 === 0) {
    barriers.push(new Barrier());
  }

  for (let i = barriers.length - 1; i >= 0; i--) {
    barriers[i].update();
    barriers[i].show();

    if (barriers[i].hits(player)) {
      gameOver = true;
    }

    if (barriers[i].offscreen()) {
      barriers.splice(i, 1);
      score++;
    }
  }

  fill(255, 255, 255);
  textSize(60);
  text("Score: " + score, width - 150, 30);
}

function keyPressed() {
  if (key === ' ') {
    if (!gameStarted) {
      gameStarted = true;
      score = 0;
      barriers = [];
    } else if (gameOver) {
   
      player = new Player();
      gameOver = false;
      score = 0;
      barriers = [];
    } else {
      player.jump();
    }
  }
}

class Player {
  constructor() {
    this.r = 100;
    this.x = 100;
    this.y = height - this.r;
    this.vy = 0;
    this.isJumping = false;
  }

  jump() {
    if (this.y >= height - this.r) {
      this.vy += jumpForce;
      this.isJumping = true;
    }
  }

  update() {
    this.y += this.vy;
    this.vy += gravity;

    if (this.y > height - this.r) {
      this.y = height - this.r;
      this.vy = 0;
      this.isJumping = false;
    }
  }

  show() {
    let img;
    if (this.isJumping) {
      img = jumpImage;
    } else {
      let index = floor(frameCount / 10) % 2;
      img = runImages[index];
    }
    image(img, this.x, this.y, this.r, this.r);
    fill(50, 150, 255);
    image(img, this.x, this.y, this.r, this.r);
  }
}

class Barrier {
  constructor() {
    this.w = 100;
    this.h = random(60, 100);
    this.x = width;
    this.y = height - this.h;
    this.speed = 6;
  }

  update() {
    this.x -= this.speed;
  }

  show() {
    fill(255, 100, 100);
    image(sImg, this.x, this.y, this.w, this.h);
  }

  offscreen() {
    return this.x + this.w < 0;
  }

  hits(player) {
    return (
      player.x < this.x + this.w &&
      player.x + player.r > this.x &&
      player.y + player.r > this.y
    );
  }
}