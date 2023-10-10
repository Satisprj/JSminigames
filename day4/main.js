const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Pratical {
  constructor() {
    this.x = Math.random() * (400 - 10) + 10;
    this.y = Math.random() * (400 - 10) + 10;
    this.r = Math.random() * (20 - 2) + 2;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fill();
  }

  move() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
   

    
  }
}

const prArray = [];


for (let i = 0; i < 16; i++) {
  const obj = new Pratical();
  prArray.push(obj);
}
console.log(prArray);

function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < 16; i++) {
    prArray[i].draw();
    prArray[i].move();
  }
  requestAnimationFrame(() => setTimeout(animate, 100)); 
}

animate();