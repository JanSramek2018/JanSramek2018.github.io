let base = 0;
let counter = 0;

$(`li`).on(`click`, event => {
    $(event.target).toggleClass(`wLine`);
})

$(`form`).on(`submit`, event => {
    event.preventDefault();
    let todo = $(`input`).val();
    counter = base + 1;
    $(`ul`).append(`<li id="ID${counter}">${todo}</li>`);
    base = counter;
    $(`#ID${counter}`).on(`click`, event => {
        $(event.target).toggleClass(`wLine`);
    })
})