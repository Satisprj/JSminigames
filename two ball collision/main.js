const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');

const box = {
    x: 30,
    y: 50,
    width: 30,
    height: 30,

}
const box2 = {
    x: 300,
    y: 250,
    width: 30,
    height: 30,

}

document.addEventListener("mousemove",(event) => {
    box.x=event.clientX;
    box.y=event.clientY;
})

