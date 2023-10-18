const canvas=document.getElementById("canvas");
const c=canvas.getContext("2d");
console.log(canvas);
class box{
    constructor(x,y,color,w)
    {
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=30;
        this.x_speed=0.5;
        this.y_speed=0.5;
        this.color=color;
        this.r=w;

    }

draw()
{
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.x,this.y,this.width,this.height);
    //c.arc(this.x,this.y,this.r,0,360);
    c.fill();
    
}
move(){
    this.x=this.x+this.x_speed;
    this.y=this.y+this.y_speed;
    if (this.x + this.height > canvas.width) {
        // check collision on right side
        this.x_speed = -0.5; // return to left
      } else if (this.x < 0) {
        // check collision on right side
        this.x_speed = 0.5; // return to right

      }
      if (this.y + this.width > canvas.height) {
        // check collision on right side
        this.y_speed = -0.5; // return to left
      } else if (this.y < 0) {
        // check collision on right side
        this.y_speed = 0.5; // return to right
      }
      

    }
        colli(){
        this.draw();
        this.move();
  }
}
const arr=[];
for(let i=0;i<20;i++)
{
    x=Math.random()*(370-30)+30;
    y=Math.random()*(370-30)+30;
    w=Math.random()*(20-1)+1;
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const obj = new box(x,y,randomColor,w);
    arr.push(obj);
}
console.log(arr);
function animate() {
    c.clearRect(0,0,400,400);
    for(let i =0;i<20;i++)
    {
        arr[i].colli();
    }

   requestAnimationFrame(animate)
    
}

animate();
