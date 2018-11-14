let base = 0;
let counter = 0;


// Nacteni poctu ulozenych prispevku
let todosDB;

fb.ref("todos").once('value').then(data => {
    let savedTodos = data.val();
    base = savedTodos.length;
    todosDB = savedTodos;

    // Nacteni ulozenych prispevku

    todosDB.forEach(todo => {
        $(`ul`).append(`<li id="ID${todo[`todoId`]}">${todo[`textId`]}</li>`);
    });
});

$(`li`).on(`click`, event => {
    $(event.target).toggleClass(`wLine`);
})
// Kliknuti na Submit
$(`form`).on(`submit`, event => {
    event.preventDefault();
    let todoText = $(`input`).val();
    let todoCount = todoText.length;

    if (todoCount > 0) {
        counter = base + 1;
        let path = `todos/${base}`;
        let todoInfo = {
            textId: `${todoText}`,
            todoId: `${base}`
        };
        fb.ref(path).set(todoInfo);
        $(`ul`).append(`<li id="id${todoInfo[`todoId`]}">${todoInfo[`textId`]}</li>`);
        base = counter;
    }
    else { alert(`Your Todo is empty`) };

    $(`#id${counter}`).on(`click`, event => {
        $(event.target).toggleClass(`wLine`);
    });

})
