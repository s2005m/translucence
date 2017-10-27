function setup(){

createCanvas(400,400);
}

function draw(){
  background(200);

  //rectangle
  stroke(255,120,120);

  fill(255,0,0);

  rect(100,100,200,100);

  // circle 1
  fill(0,255,0,100);
  ellipse(100,100,60,60);

  // circle 2
  ellipse(300,100,60,60);

  //circle 3
  ellipse(100,200,60,60);

  //circle 4
  ellipse(300,200,60,60);

}
