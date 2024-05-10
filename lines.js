let strokeLetter;
let strokeAll;

let oscillation;

let x; let y;


let r; let g; let b;

let timer = 2000;
let nextChange = timer;

let distance;

let targetX; let targetY;
let oscillationX; let oscillationY;

class Line {

    constructor(ox, oy, r, angle) {
        // ox=originX, oy=originY
        this.ox = ox;
        this.oy = oy;
        // vertical length
        this.r = r;
        // horizontal length
        this.rt = r / 3;

        this.baseAngle = angle;
        this.angle = angle;

        this.t = 0;

        this.isLetter = false;

        this.homeX=ox;
        this.homeY=oy;


    }

    display() {



        // console.log(`time elapsed: ${round(millis() / 1000)}`,millis());

        // strokeWeight(1);

        if (false && this.isLetter == true) {

            if (millis() > nextChange) {

                if (millis(nextChange)) {
                    stroke(r, g, b);

                    nextChange = millis() + timer;
                }


            }


            strokeWeight(strokeLetter);
            // this.baseAngle = targetAngle + oscillation;
        } 

        // if(mouseX===this.ox){
        //     stroke(255);
        // }else{
        //     stroke(0);
        // }


        push();
        // origin in the center
        translate(this.ox, this.oy);
        rotate(this.angle);

        // let anglet=90-this.angle;


        // polar coordinate: Vertical T
        x = this.r * cos(90 - this.baseAngle);
        y = this.r * sin(90 - this.baseAngle);


        // if (this.isLetter == true){
        //     stroke(255);
        //     // strokeWeight(5);
        // }

        // vertical T

        if (millis() > nextChange) {

            r = random(0, 255);
            g = random(0, 255);
            b = random(0, 255);

            nextChange = millis() + timer;
        }


        strokeWeight(strokeAll)
        stroke(255 - r, 255 - g, 255 - b);

        line(0, 0, x, y)






        for (let k = 0; k < points.length; k++) {

            distance=dist(this.ox,this.oy,points[k].x,points[k].y);

            if (distance < 15) {



                strokeWeight(strokeLetter)
                // stroke(0,200,255);
                stroke(r, g, b);
                line(0, 0, x, y);

                // console.log(x);
                // console.log(y);
            }


        }



        // if(isText){
        //     stroke(0,200,255)
        //     line(0,0,x,y);
        // }else{
        //     stroke(255)
        //     line(0,0,x,y);
        // }




        // if (this.isLetter == true) {
        //     stroke(255);
        //     // tangent T
        //     let xt = this.rt * cos(this.baseAngle);
        //     let yt = this.rt * sin(this.baseAngle);

        //     // tangent T

        //     line(x - xt, y - yt, x + xt, y + yt);
        // }




        // tangent T
        // line(x-xt,y-yt,x+xt,y+yt);

        pop();

    }

    update() {
        let dMouse = dist(mouseX, mouseY, this.ox, this.oy);
        this.angle = atan2(mouseY - this.oy, mouseX - this.ox) + 90;
        // let angleToMouse = atan2(mouseY - this.oy, mouseX - this.ox);
        // this.angle = angleToMouse - HALF_PI;
        // this.r = dist(this.ox, this.oy, mouseX, mouseY)
        this.r = map(dMouse, 0, dist(0, 0, width, height), size, size - 5 * offset);


        strokeLetter = map(dMouse, 0, dist(0, 0, width, height), 10, 4);
        strokeAll = map(dMouse, 0, dist(0, 0, width, height), 3, 1);

        // mouse
        let mouseD=dist(this.ox,this.oy,mouseX,mouseY);
        let mouseA=atan2(this.oy-mouseY,this.ox-mouseX);

        // home
        let homeD=dist(this.ox,this.oy,this.homeX,this.homeY);
        let homeA=atan2(this.homeY-this.oy,this.homeX-this.ox);

        // forces
        let mouseF=constrain(map(mouseD,0,100,10,0),0,3);
        let homeF=map(homeD,0,100,0,10);



        // x repulsive force
        let repulseFX=cos(mouseA)*mouseF;
        // x attractive force
        let attractFX=cos(homeA)*homeF;
        // x net force
        let forceX=attractFX+repulseFX;


        // y repulsive force
        let repulseFY=sin(mouseA)*mouseF
        // y attractive force
        let attractFY=sin(homeA)*homeF
        // y net force
        let forceY=attractFY+repulseFY;

        this.ox=this.ox+forceX;
        this.oy=this.oy+forceY;



        // this.offset = sin(frameCount * 2) * 5;

        // targetX = this.ox + 20 * cos(this.angle);
        // targetY = this.oy + 20 * sin(this.angle);

        // oscillationX = 5 * cos(frameCount / 30); // Adjust speed by changing '30'
        // oscillationY = 5 * sin(frameCount / 30);



        // mouseIsPressed();
        // function mouseIsPressed(){
        //     x=targetX+oscillationX;
        //     y=targetY+oscillationY;
        // }




        // if (this.isLetter==true) {
        //     x = targetX+oscillationX;
        //     y = targetY+oscillationY;

        // } else {
        //     x=this.ox;
        //     y=this.oy;

        // }


    }
    // move(){
    //     // rotation speed
    //     let speed=3;
    //     // increment is between -1 and 1
    //     let increment=speed*sin(this.t);
    //     // time increase by 1 each round
    //     this.t+=1;

    //     this.angle+=increment;
    // }
}