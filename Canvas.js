let elementType = 0;
let n = 0;
let s = 0;
let x = 0;
let y = 0;
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
r = $(`#elementsR`).val();
console.log(`r=${r}`);
g = $(`#elementsG`).val();
console.log(`g=${g}`);
b = $(`#elementsB`).val();
console.log(`b=${b}`);
t = $(`#elementsT`).val() / 100;
console.log(`t=${t}`);









$(`#elementsSize`).change(function () {
    s = $(`#elementsSize`).val();
    console.log(`s=${s}`);
    if (elementType === `square`) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 750, 300);
        ctx.fillRect(20, 20, s, s);
    }

})


$(`#elementsType`).change(function () {
    elementType = $(`#elementsType`).val();
    console.log(elementType);

    if (elementType === `square`) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillRect(20, 20, s, s);
    }

    if (elementType === `circle`) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }







});



