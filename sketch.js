function setup() {
  createCanvas(400,400);
 
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  drawSprites();

  scAngle = map(sc, 0,60,0,360);
  mnAngle = map(mn, 0,60,0,360);
  hrAngle = map(hr, 0,12,0,360);

  push();
  rotate(scAngle);
  translate(scAngle)
  strokeWeight(7);
  stroke(255,0,0);
  line(0,0,0,100);
  arc(200,200,100,1,scAngle,0);
  pop();

  push();
  rotate(mnAngle);
  translate(200,125);
  strokeWeight(7);
  stroke(0,255,0);
  line(200,200, 200, 125)
  arc(200,200,100,1,0,mnAngle);
  pop();

  push();
  rotate(hrAngle);
  translate(200,100)  
  strokeWeight(7);
  stroke(0,0,255);
  line(200,200, 200,100)
  arc(200,200,100,10,hrAngle%12,0);
  pop();
}