let base = 0
let counter = 0

$(`#Increase`).on(`click`, event => {
    counter = base + 1;
    $(`#counterNumber`).text(`${counter}`);
    base = counter;
})

$(`#Decrease`).on(`click`, event => {
    counter = base - 1;
    $(`#counterNumber`).text(`${counter}`);
    base = counter;
})
    
