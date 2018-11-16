let elementType = 0;
let n = 0;
let s = 0;
let x = 0;
let y = 0;
let offset = 0;
let r = 0;
let g = 0;
let b = 0;
let t = 0;



n = $(`#elementsNumber`).val();
console.log(`n=${n}`);
s = $(`#elementsSize`).val();
console.log(`s=${s}`);
x = $(`#elementsX`).val();
console.log(`x=${x}`);
y = $(`#elementsY`).val();
console.log(`y=${y}`);
offset = $(`#elementsR`).val();
console.log(`offset=${offset}`);
r = $(`#elementsR`).val();
console.log(`r=${r}`);
g = $(`#elementsG`).val();
console.log(`g=${g}`);
b = $(`#elementsB`).val();
console.log(`b=${b}`);
t = $(`#elementsT`).val() / 100;
console.log(`t=${t}`);

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let w = c.width;
let h = c.height;

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

$(`#elementsSize`).change(function () {
    s = $(`#elementsSize`).val();
    console.log(`s=${s}`);
        
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = `rgba(${r},${g},${b},${t})`;
    ctx.strokeStyle = `rgba(${r},${g},${b},${t})`;
    if (elementType === `square`) {
        
            ctx.fillRect(x, y, s, s);
            x = x+ 10;
            y = y+ 50;
            ctx.fillRect(x, y, s, s);
            
          
    }
    if (elementType === `rectangular`) {
        ctx.fillRect(20, 20, 2*s, s);
        ctx.fillRect(2*20, 2*20, 2*s, s);
        ctx.fillRect(x, y, 2*s, s);
        x = x+ 10;
        y = y+ 50;
        ctx.fillRect(x, y, 2*s, s);
    }
    if (elementType === `triangle`) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+s/2, y+s/2);
        ctx.lineTo(x-s/2, y+s/2);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    if (elementType === `circle`) {
        ctx.beginPath();
        ctx.arc(x, y, s, 0, 2 * Math.PI);
        ctx.stroke();
    }
    if (elementType === `lines`) {
        for (var i = 0; i < n; i = i + 1) {
            var xl = i * w / (n - 1);
            var yl = i * h / (n - 1);
            drawLine(0, yl, xl, h);
            drawLine(xl, 0, w, yl);
          }
          
    }















})


$(`#elementsType`).change(function () {
    elementType = $(`#elementsType`).val();
    console.log(elementType);
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    
    if (elementType === `square`) {
       
        ctx.fillRect(20, 20, s, s);
    }

    if (elementType === `circle`) {
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }







});



