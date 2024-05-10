let font;

let msg = 'JY';
let points = [];

let fontX = 50; let fontY = 350; let fontSize = 400;

let lines = [];
let letters = [];

let cols; let rows; let size = 20;

// make vertical side shorter
let offset = 2 / 5 * size;

// let distance;

let scale;


function preload() {
    font = loadFont("font/Sequel Sans Heavy Body.ttf");
}





function setup() {
    createCanvas(670, 440);
    angleMode(DEGREES)

    // frameRate(60);

    cols = width / size;
    rows = height / size;
    // array
    for (let i = 0; i < cols; i++) {
        lines[i] = [];
        for (let j = 0; j < rows; j++) {
            lines[i][j] = new Line(size / 2 + i * size, size / 2 + j * size, size - offset, 0);
        }
    }

    points = font.textToPoints(msg, fontX, fontY, fontSize);

    // letters=new Letter(width/2,height/2,100,0);
    console.log(points.length);


    // for (let k = 0; k < points.length; k++) {
    //     letters[k] = [];
    //     for (let j = 0; j < points.length; j++) {

    //         // letters[k][j] = new Letter(size / 2 + k * size,  j* size-size / 2 , size - offset, 0);
    //         letters[k][j] = new Letter(points[k].x, points[k].y, size - offset, 0);
        
    //     }
    // }


}

function draw() {
    background(0);



    

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // for (let k = 0; k < points.length; k++) {
            //     distance = dist(points[k].x, points[k].y, letters[i][j].ox, letters[i][j].oy);

            //     // if the distance between the letter points and lines is shorter than 10
            //     if (false && distance < 15) {
            //         // the letter points is a part of the lines
            //         letters[i][j].isLetter = true;
            //         // break;
            //     }

            // letters[i][j].display();
            // letters[i][j].update();

            //     // let dMouse=dist(mouseX,mouseY,letters[i][j].ox,letters[i][j].oy);
            //     // angle=atan2(mouseY-letters[i][j].oy,mouseX-letters[i][j].ox);

            //     // push();
            //     // rotate(angle);
            //     // pop();
            // }


            // distance = dist(points[i].x, points[i].y, lines[i][j].ox, lines[i][j].oy);
            // lines[i][j].display(distance<15);
            // lines[i][j].update();

            lines[i][j].display();
            lines[i][j].update();



        }
    }



    // for (let k = 0; k < points.length; k++) {
    //     // for(let j = 0; j< points.length; j++){


    //     // for()

    //     for (let i = 0; i < points.length; i++) {
    //         // for(let h=0;h<point.length;h++){

    //             distance = dist(points[10].x, points[50].y, letters[k][i].ox, letters[k][i].oy);

    //             // letters[k][i].display(); 
    //             // letters[k][i].update();

    //             if (distance < 1500) {

    //                 letters[k][i].isLetter = true;
    //                 // letters[k][i].y = points[i].y
    //                 // line(points[i].x, points[i].y, points[i].x + 10, points[i].y)

    //                 // letters[k][i].display();
    //                 // letters[k][i].update();
    //             }
    //     // }
    //     }




    // }


    // noStroke();
    // fill(255, 0, 0);
    // for (let i = 0; i < points.length; i++) {
    //     ellipse(points[i].x, points[i].y, 15, 5);

    // }


    // scale(1.4);


    // function sun(){
    //     fill(0,0,255)
    //     // scale(1.5);
    //     circle(mouseX,mouseY,20);
    //     scale(1)
    // }

    // sun1();



    sun1()

}


function sun1(){
    fill(236,206,86)
    noStroke();
    // scale(1.5);
    push();
    translate(mouseX,mouseY)
    radialGradientWithinArc(0, 0, 40, 0, 360, [236,206,86], [255,255,255,0]);
    circle(0,0,20);
    pop();
    // scale(1)
}

function radialGradientWithinArc(x, y, d, startAngle, endAngle, startColor, endColor) {
    let ctx = drawingContext;
    // Save the current state before clipping
    ctx.save();
  
    // Begin a new path for the arc (clipping path)
    ctx.beginPath();
    // Move to the center of the arc to ensure the closed path includes the center
    ctx.moveTo(x, y);
    // Create an arc path
    ctx.arc(x, y, d / 2, radians(startAngle), radians(endAngle));
    // Close the path back to the center to complete the shape for clipping
    ctx.closePath();
    // Clip to the arc path
    ctx.clip();
  
    // Create the radial gradient within the clipped area
    // This line initializes a new radial gradient using createRadialGradient(), a method of the canvas 2D context (ctx).
    // The parameters define the gradient's start and end circles. The first three parameters (x, y, 0) set the starting circle at coordinates (x, y) with a radius of 0, effectively making it a point.
    // The next three parameters (x, y, d / 2) set the ending circle at the same coordinates but with a radius of d / 2, making the gradient radiate outward from a central point to the edge of a circle with diameter d.
    let gradient = ctx.createRadialGradient(x, y, 0, x, y, d / 2);
  
  
    // This adds the initial color (startColor) to the gradient at position 0, which corresponds to the center of the gradient. The color() function converts a color value to a p5.js color object, and toString() converts this object to a CSS color string, which addColorStop() requires.
    gradient.addColorStop(0, color(startColor).toString());
    // This adds the final color (endColor) to the gradient at position 1, which corresponds to the outer edge of the gradient. This creates a transition from the startColor at the center to the endColor at the edges.
    gradient.addColorStop(1, color(endColor).toString());
  
    // Apply the gradient as fill style and fill a rectangle that covers the entire area
    ctx.fillStyle = gradient;
    // This sets the previously defined gradient as the fill style for the context. Future shapes filled using this context will use this gradient.
    ctx.fillRect(x - d / 2, y - d / 2, d, d);
  
    // Restore the context to its state before clipping
    ctx.restore();
  
  }
