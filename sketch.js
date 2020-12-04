function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  let hr = hour();
  let min = minute();
  let sec = second(); 

  translate(250,250);
  rotate(-90)

  let hourAngle = map(hr,0,12,0,360)
  let minuteAngle = map(min,0,60,0,360)
  let secondAngle = map(sec,0,60,0,360)

  push();
  noFill();
  strokeWeight(7)
  stroke(255,0,0)
  arc(0,0,310,310,0,hourAngle)
  stroke(0,0,255)
  arc(0,0,289,289,0,minuteAngle)
  stroke(0,255,0)
  arc(0,0,268,268,0,secondAngle)
  pop();

  push();
  rotate(hourAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,60,0)
  pop();

  push();
  rotate(minuteAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,85,0)
  pop();

  push();
  rotate(secondAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop();

  stroke(255)
  strokeWeight(7)
  point(0,0)

  drawSprites();
}