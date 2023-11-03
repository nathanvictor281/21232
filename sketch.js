let ground;
let lander;
var lander_img;
var bg_img;
var groundHeight = 50; // Adjust the ground height as needed

var vx = 0;
var g = 0.05;
var vy = 0;

function preload() {
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000, 700);
  frameRate(80);

  lander = createSprite(100, height - groundHeight - 15, 30, 30); // Start lander just above the ground
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() {
  // Change background color based on the lander's position
  if (lander.position.y > height / 2) {
    background(0, 100, 200); // Change background color to blue
  } else {
    background(51); // Default background color
  }

  image(bg_img, 0, 0);

  push();
  fill(255);
  text("Vertical Velocity: " + round(vy), 800, 75);
  pop();

  // Check if the lander has touched the ground
  if (lander.position.y + lander.height / 2 >= height - groundHeight) {
    lander.position.y = height - groundHeight - lander.height / 2; // Prevent falling below the ground
    vy = 0; // Stop vertical velocity on touching the ground
  } else {
    //fall down
    vy += g;
    lander.position.y += vy;
  }

  // move left or right based on user input
  if (keyIsDown(LEFT_ARROW)) {
    vx -= 0.1;
  } else if (keyIsDown(RIGHT_ARROW)) {
    vx += 0.1;
  }

  // apply horizontal velocity
  lander.position.x += vx;

  drawSprites();
}
