const canvas=document.getElementById("canvas");
const c=canvas.getContext("2d");
class Particle{
    constructor(x1,y1)
    {
        this.x=x1;
        this.y=y1;
        this.r=30;
        this.h=30;
        this.x_speed=1
        this.y_speed=1;

    }

draw()
{
    c.beginPath();
    c.rect(this.x,this.y,this.r,this.h);
    c.fill();
    
}
move(){
    this.x=this.x+this.x_speed;
    this.y=this.y+this.y_speed;
    if (this.x + this.r > canvas.width) {
        // check collision on right side
        this.x_speed = -1; // return to left
      } else if (this.x < 0) {
        // check collision on right side
        this.x_speed = 1; // return to right
      }
      if (this.y + this.r > canvas.height) {
        // check collision on right side
        this.y_speed = -1; // return to left
      } else if (this.y < 0) {
        // check collision on right side
        this.y_speed = 1; // return to right
      }

}
}

const obj = new Particle(0,0);
const obj1 = new Pratical(20,50);
const obj2 = new Particle(100,20);
const obj4 = new Pratical(200,100);







function animate() {
    c.clearRect(0,0,400,400);
    obj.draw();
    obj.move();
    obj1.draw();
    obj1.move();
   requestAnimationFrame(animate)
    
}
animate();
