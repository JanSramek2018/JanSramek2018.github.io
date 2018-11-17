


function drawCanvas() {

   

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

    n = $(`#elementsNumber`).val() * 1;
    console.log(`n=${n}`);
    s = $(`#elementsSize`).val() * 1;
    console.log(`s=${s}`);
    x = $(`#elementsX`).val() * 1;
    console.log(`x=${x}`);
    y = $(`#elementsY`).val() * 1;
    console.log(`y=${y}`);
    offset = $(`#offset`).val() * 1;
    console.log(`offset=${offset}`);
    r = $(`#elementsR`).val() * 1;
    console.log(`r=${r}`);
    g = $(`#elementsG`).val() * 1;
    console.log(`g=${g}`);
    b = $(`#elementsB`).val() * 1;
    console.log(`b=${b}`);
    t = $(`#elementsT`).val() / 100;
    console.log(`t=${t}`);

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    let w = c.width;
    let h = c.height;
    let offsetSq = offset;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = `rgba(${r},${g},${b},${t})`;
    ctx.strokeStyle = `rgba(${r},${g},${b},${t})`;
    if (elementType === `square`) {

        for (var i = 0; i < n; i = i + 1) {
            ctx.fillRect(x + offsetSq, y + offsetSq, s, s);
            offsetSq = (offsetSq + offset);
        }
    }
    if (elementType === `rectangular`) {

        for (var i = 0; i < n; i = i + 1) {
            ctx.fillRect(x + offsetSq, y + offsetSq, 2 * s, s);
            offsetSq = (offsetSq + offset);
        }
    }
    if (elementType === `triangle`) {

        ctx.beginPath();
        for (var i = offsetSq; i <= 200; i = i + n) {
            ctx.moveTo(x + i, y + i);
            ctx.lineTo(x + s / 4 * 3 + i, y + s / 4 * 3 + i);
            ctx.lineTo(x - s / 4 * 3 + i, y + s / 4 * 3 + i);
            ctx.lineTo(x + i, y + i);
            ctx.stroke();
        }
    }
    if (elementType === `circle`) {
        ctx.beginPath();
        for (var i = 0; i <= n; i = i + 1) {
            ctx.arc(x, y, s + offsetSq, 0, 2 * Math.PI);
            ctx.stroke();
            offsetSq = (offsetSq + offset)
        }
    }
    if (elementType === `lines`) {
        for (var i = 0; i < n; i = i + 1) {

            function drawLine(x1, y1, x2, y2) {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }

            var xl = i * w / (n - 1);
            var yl = i * h / (n - 1);
            drawLine(0, yl, xl, h);
            drawLine(xl, 0, w, yl);
        }

    }
}

$(`#elementsSize`).change(function () {

    drawCanvas();
});

$(`#elementsNumber`).change(function () {

    drawCanvas();
});

$(`#elementsType`).change(function () {

    drawCanvas();
});

$(`#elementsX`).change(function () {

    drawCanvas();

});

$(`#elementsY`).change(function () {

    drawCanvas();

});

$(`#elementsR`).change(function () {

    drawCanvas();

});

$(`#elementsG`).change(function () {

    drawCanvas();

});

$(`#elementsB`).change(function () {

    drawCanvas();

});

$(`#elementsT`).change(function () {

    drawCanvas();

});

$(`#offset`).change(function () {

    drawCanvas();

});













