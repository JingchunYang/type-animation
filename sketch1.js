let font;
let points = []; let msg = "Jason Yang";
let size = 100;
let r = 10; let angle = 0; let t = 0;

let transX=30;
let transY=400;

let rectWidth=0;
let rectHeight=50;


class rect{
  constructor(){

  }

}

class name{
  constructor(){

  }
}


function preload() {
  font = loadFont("Sequel Sans Heavy Body.ttf");
}

function setup() {
  createCanvas(800, 300);
  points = font.textToPoints(msg, 0, 0, size, {
    sampleFactor: 0.5,
    simplifyThreshold: 0.0
  });
  angleMode(DEGREES);
}

function draw() {
  background(255, 93, 100);
  stroke(0,255,0);
  let x = r*cos(angle);
  let y = r*sin(angle);
  translate(transX, transY);
  for (let i=0; i<points.length; i++) {
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  }
  
  fill(255, 100);
  textSize(size);
  textFont(font);
  text(msg, x, y);






  // let increment = 5*sin(t);
  // t++;
  // angle += increment;
  angle=mouseX;

  if(transY>150){
    transY-=4
  }
  
}