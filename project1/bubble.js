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
           this.x_speed=(Math.random() - 0.5) * 4;
           this.y_speed=(Math.random() - 0.5) * 4;
           this.color=color;
           this.radius=w;   
       }
   draw()
   {
       c.beginPath();
       //c.clearRect(0,0,400,400);
       c.fillStyle = this.color;
       //c.rect(this.x,this.y,this.width,this.height);
       c.arc(this.x,this.y,this.radius,0,360);
       c.fill();
   }
  move()
   {

    if(this.y<200)
     this.y=this.y-this.y_speed;
       this.x=this.x-this.x_speed;       
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.x_speed = -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.y_speed = -1;
    }

  }
      collison(){    
        this.draw();
        this.move();
      }
   }
   const arry=[];
   canvas.addEventListener("click",(evet)=>{
    c.clearRect(0,0,400,400);
   });
   canvas.addEventListener("click", (event) => {
    // c.clearRect(0,0,400,400);
    //  for(let i =0;i<20;i++){
    //  const obj = new box();
    //   arry.push(obj);
    //  }
    x = event.clientX;
    y = event.clientY;
  arry.length=0;
     for(let i=0;i<50;i++)
     {
    
       x=Math.random()*(370-30)+30;
       y=Math.random()*(370-30)+30;
       w=Math.random()*(20-1)+1;
       randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
       const obj = new box(x,y,randomColor,w);
       arry.push(obj);
      }
      
      console.log(arry);
      animate();

    }); 
    
    function animate() {
       c.clearRect(0,0,400,400);
       for(let i =0;i<arry.length;i++)
       {
          arry[i].collison();
       }

     requestAnimationFrame(animate)
    }