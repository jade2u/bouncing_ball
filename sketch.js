let balls = [];
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  textSize(20);
  
  
  //create size slider
  sizeSlider = createSlider(5, 100, 10);
  sizeSlider.position(90, 470);
  
  
  speedSlider = createSlider(1, 3, 1, 0.1);
  speedSlider.position(350, 470);
}

function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].update();
    balls[i].bounce();
  }
  fill(255);
  // text(balls.length, width / 2, height / 2);
  
  text("ball size", 50, 480)
  text("speed", 320,480)
  
  fill(255);
  text(balls.length, width/2, height/2);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    balls.push(new Ball(mouseX, mouseY));
    print(balls.length);
  }
}
function keyPressed() {
  if(keyCode === BACKSPACE){
 balls.pop();    
  }
}