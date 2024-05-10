class Letter{
    constructor(ox,oy,r,angle){
        // ox=originX, oy=originY
    this.ox=ox;
    this.oy=oy;
    // vertical length
    this.r=r;
// horizontal length
    this.rt=r/3;

    this.baseAngle=angle;
    this.angle=angle;

    this.t=0;

    this.isLetter=false;

    // this.offset=0;
    

}

display(){

    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);

    // console.log(`time elapsed: ${round(millis() / 1000)}`,millis());

    // strokeWeight(1);



    if (this.isLetter == true){

        if (millis() > nextChange) {

            if(false){
                stroke(r,g,b);

                nextChange = millis() + timer;
            }


          }


        strokeWeight(strokeLetter);
        // this.baseAngle = targetAngle + oscillation;
    }else{
        stroke(255)
        strokeWeight(strokeAll);
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
    x=this.r*cos(90-this.baseAngle);
    y=this.r*sin(90-this.baseAngle);


    // if (this.isLetter == true){
    //     stroke(255);
    //     // strokeWeight(5);
    // }

    // vertical T

    stroke(0,255,255)
    line(0,0,x,y);

    if (this.isLetter == true){
        stroke(255);
        // tangent T
        let xt=this.rt*cos(this.baseAngle);
        let yt=this.rt*sin(this.baseAngle);

        // tangent T

        line(x-xt,y-yt,x+xt,y+yt);
    }
    // tangent T
    // line(x-xt,y-yt,x+xt,y+yt);

    

    pop();

}

update(){
    let dMouse=dist(mouseX,mouseY,this.ox,this.oy);
    this.angle=atan2(mouseY-this.oy,mouseX-this.ox)+90;
    // let angleToMouse = atan2(mouseY - this.oy, mouseX - this.ox);
    // this.angle = angleToMouse - HALF_PI;
    // this.r = dist(this.ox, this.oy, mouseX, mouseY)
    this.r=map(dMouse,0,dist(0,0,width,height),size,size-5*offset);
    
    strokeLetter=map(dMouse,0,dist(0,0,width,height),10,5);
    strokeAll=map(dMouse,0,dist(0,0,width,height),3,1);

    // this.offset = sin(frameCount * 2) * 5;

    let targetX = this.ox + 20* cos(this.angle);
    let targetY = this.oy + 20* sin(this.angle);

    let oscillationX = 5 * cos(frameCount / 30); // Adjust speed by changing '30'
    let oscillationY = 5 * sin(frameCount / 30);

    // if (this.isLetter==true) {
    //     x = targetX+oscillationX;
    //     y = targetY+oscillationY;

    // } else {
    //     x=this.ox;
    //     y=this.oy;

    // }





}
// move(){


}

