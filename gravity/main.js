const canvas = document.getElementById("canvas");
const c=canvas.getContext("2d");


class ball{
    constructor(){
        this.x=30;
        this.y=30;
        this.w=50;
        this.h=50;
        this.velocity_x=1;
        this.velocity_y=1;
        this.acceleration= 9.8/60;
}
    draw(){
        c.beginPath();  //start drawing the shape
        c.rect(this.x,this.y,this.w,this.h);
        c.fill();
    }
    move(){
        this.velocity_y += this.acceleration;
        this.y += this.velocity_y;
        //console.log(this.y);
    }
    collison(){
        if (this.y + this.h > 400) {
        this.y = 400 - this.h;
            this.velocity_y *= -0.8;
        }
    }
    }
const obj = new ball();
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    obj.draw();
    obj.move();
    obj.collison();
    requestAnimationFrame(animate);
}
animate();
